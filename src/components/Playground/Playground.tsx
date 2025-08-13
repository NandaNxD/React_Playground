import { PanelGroup } from "react-resizable-panels";
import CodeEditor from "../CodeEditor/CodeEditor";
import FileTree from "../FileTree/FileTree";
import OutputIframe from "../OutputIframe/OutputIframe"
import CustomResizeHandle from "../CustomResizeHandle/CustomResizeHandle";
import CustomResizePanel from "../CustomResizePanel/CustomResizePanel";
import Console from "../Console/Console";


const Playground = () => {
	return (
		<div className="h-[92vh] bg-slate-600 text-white">
			<PanelGroup direction="horizontal" >
				<CustomResizePanel defaultSize={15}>
					<FileTree />
				</CustomResizePanel>

                <CustomResizeHandle/>
				
				<CustomResizePanel defaultSize={60}>
					<CodeEditor></CodeEditor>
				</CustomResizePanel>
                
				<CustomResizeHandle/>

                <CustomResizePanel defaultSize={25}>
                     <PanelGroup direction="vertical">
                    <CustomResizePanel defaultSize={80}>
					    <OutputIframe />
				    </CustomResizePanel>

                    <CustomResizeHandle/>

                    <CustomResizePanel defaultSize={20}>
                        <Console/>
                    </CustomResizePanel>

                    


                </PanelGroup>

                </CustomResizePanel>

               

				
			</PanelGroup>
		</div>
	);
};

export default Playground;
