/* eslint-disable no-console */
import shipitDeploy from '../..'

export default shipit => {
  shipitDeploy(shipit)

  shipit.initConfig({
    default: {
      key: '/home/travis/.ssh/id_rsa',
      workspace: '/tmp/shipit-workspace',
      deployTo: '/tmp/shipit',
      repositoryUrl: 'https://github.com/shipitjs/shipit.git',
      ignores: ['.git', 'node_modules'],
      shallowClone: true,
    },
    test: {
      servers: 'travis@localhost',
    },
  })

  shipit.task('ls-releases', async () => {
    await shipit.remote('ls -lah /tmp/shipit/releases')
  })

  shipit.task('ls-current', async () => {
    await shipit.remote('ls -lah /tmp/shipit/current')
  })
}
