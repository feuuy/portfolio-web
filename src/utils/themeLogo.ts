export const themeLogo = (theme: string) => {
  if (theme === 'dark') {
    return require('public/images/logo-dark.svg')
  } else {
    return require('public/images/logo.svg')
  }
}
