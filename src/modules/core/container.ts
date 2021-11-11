import { DIAbstractRequestClientKey } from './../shared/interface/request-client'
import { Container } from 'inversify'
import BaseRequestClient from '../shared/request-client'

export const container = new Container()

container.bind(DIAbstractRequestClientKey).to(BaseRequestClient)
