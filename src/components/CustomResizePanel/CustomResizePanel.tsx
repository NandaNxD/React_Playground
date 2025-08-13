import { Panel } from "react-resizable-panels"

const CustomResizePanel = ({children,defaultSize}:{children:React.ReactNode,defaultSize:number}) => {
  return (
    <Panel defaultSize={defaultSize}>
        {children}
    </Panel>
  )
}

export default CustomResizePanel