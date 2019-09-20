import { joinCommandArgs, requireArgs } from './util'

export function formatCdCommand({ folder }) {
  requireArgs(['folder'], { folder }, 'cd')
  const args = ['cd', folder]
  const isWin = /^win/.test(process.platform)
  if (isWin && folder.indexOf('/') > 0) {
    const drive = folder.slice(0, 2)
    args.push(`&& ${drive}`)
  }
  return joinCommandArgs(args)
}
