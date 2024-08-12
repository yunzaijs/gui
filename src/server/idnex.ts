import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
const cwd = process.cwd()
const dir = join(cwd, 'yunzai-gui.json')
export const secret_key = 'yunzai:secret:key'
export const UserName = 12345678
export const PassWord = 12345678
export const HTTPS_GIT_SHELL =
  'git clone --depth=1 https://github.com/yunzai-org/yunzaijs.git'
export const CURL_SHELL =
  'curl -L -o yunzaijs.zip https://github.com/yunzai-org/yunzaijs/archive/refs/heads/main.zip'
/**
 *
 * @returns
 */
export const getConfig = () => {
  if (!existsSync(dir)) return null
  return JSON.parse(readFileSync(dir, 'utf-8'))
}

/**
 *
 * @param name
 * @returns
 */
export const getGuiConfig = (name: 'bot' = 'bot') => {
  const dir = join(cwd, `config/gui/${name}.json`)
  if (!existsSync(dir)) {
    mkdirSync(dirname(dir), { recursive: true })
    writeFileSync(dir, `[]`)
    return []
  }
  return JSON.parse(readFileSync(dir, 'utf-8'))
}
