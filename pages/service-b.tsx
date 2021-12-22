import { BComponentMainPage } from '../src/modules/test-b/pages/BComponentMainPage'
import { BComponentLayout } from '../src/modules/test-b/pages/BComponentLayout'

;(BComponentMainPage as unknown as any).getLayout = BComponentLayout

export default BComponentMainPage
