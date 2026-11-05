import { createContext } from 'react'
import type { LocalizedText, Locale } from '../types/portfolio'
import type { UiTranslations } from './translations'

export interface LanguageContextValue {
  language: Locale
  setLanguage: (language: Locale) => void
  localize: (value: LocalizedText) => string
  t: UiTranslations
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
