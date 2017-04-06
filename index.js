import nanologger from 'nanologger'

const logger = nanologger('dact')

export default function log (data) {
  return next => (extend, meta) => {
    logger.info(`${meta || 'object'} emitted`, extend)
    logger.info('next state', { ...data.state, ...extend })

    return next(extend)
  }
}
