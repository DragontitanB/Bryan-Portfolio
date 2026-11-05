import { useLanguage } from '../hooks/useLanguage'
import type { Locale } from '../types/portfolio'

interface LanguageSwitcherProps {
  placement: 'desktop' | 'mobile'
}

export function LanguageSwitcher({ placement }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage()
  const options: readonly { code: Locale; label: string }[] = [
    { code: 'en', label: t.language.englishLabel },
    { code: 'es', label: t.language.spanishLabel },
  ]

  return (
    <div className={`language-switcher language-switcher--${placement}`} role="group" aria-label={t.language.selectorLabel}>
      {options.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={label}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
