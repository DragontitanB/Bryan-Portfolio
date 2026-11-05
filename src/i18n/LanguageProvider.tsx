import { useCallback, useLayoutEffect, useMemo, useSyncExternalStore, type ReactNode } from 'react'
import type { Locale } from '../types/portfolio'
import { LanguageContext } from './language-context'
import { translations } from './translations'

export const LANGUAGE_STORAGE_KEY = 'bryan-portfolio:language'

const listeners = new Set<() => void>()

function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'es'
}

function readStoredLanguage(): Locale {
  if (typeof window === 'undefined') return 'en'

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (isLocale(storedLanguage)) return storedLanguage
    if (storedLanguage !== null) window.localStorage.removeItem(LANGUAGE_STORAGE_KEY)
  } catch {
    // Storage can be unavailable in privacy modes or restricted contexts.
  }

  return 'en'
}

let currentLanguage: Locale = readStoredLanguage()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getLanguageSnapshot() {
  return currentLanguage
}

function getServerLanguageSnapshot(): Locale {
  return 'en'
}

function updateLanguage(language: Locale) {
  currentLanguage = language
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch {
    // The in-memory selection remains functional when storage is unavailable.
  }
  listeners.forEach((listener) => listener())
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getLanguageSnapshot, getServerLanguageSnapshot)
  const t = translations[language]

  useLayoutEffect(() => {
    document.documentElement.lang = language
    document.title = t.seo.title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', t.seo.description)

    const pendingLanguage = document.documentElement.dataset.languagePending
    if (!pendingLanguage || pendingLanguage === language) {
      delete document.documentElement.dataset.languagePending
    }
  }, [language, t])

  const localize = useCallback((value: Record<Locale, string>) => value[language], [language])
  const value = useMemo(() => ({ language, setLanguage: updateLanguage, localize, t }), [language, localize, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
