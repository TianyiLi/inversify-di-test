import AComponentLayout from '../src/modules/test-a/pages/AComponentLayout'
import { AMainPage } from '../src/modules/test-a/pages/AComponentMainPage'

;(AMainPage as unknown as any).getLayout = AComponentLayout

export default AMainPage
