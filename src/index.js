import globby from globby

const load = () => {
  return globby('rules/*.js')
}
