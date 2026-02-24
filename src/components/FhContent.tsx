import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import fhLogo from "@/assets/fhLogo.svg";
import sommerEvent from "@/images/fh/som_ev.jpeg";
import potluck1 from "@/images/fh/potluck1(4).jpg";
import potluck3 from "@/images/fh/potluck3.jpg";
import potluck3_1 from "@/images/fh/potluck3_1.jpg";
import polaroid_stud from "@/images/fh/LT_girlies.jpeg";
import polaroid_LLM3 from "@/images/fh/LLM3.jpeg";

export default function FhContent() {
  return (
    <div className="w-full bg-teal-950 py-3">
      <div className="flex flex-col md:flex-row md:w-[80%] w-full mx-auto items-center gap-4 p-4 text-white bg-teal-700 rounded-md">
        <div className="w-[50%] bg-white rounded-lg my-auto p-4">
          <img src={fhLogo} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="md:w-[50%] w-full">
          <h2 className="text-lg font-bold mb-2">E-Learning and Web Dev</h2>
          <p className="mb-4 text-sm">
            Worked on various projects in the field of E-Learning as opposed to
            Bioinfo and therefore cannot do my thesis here :(
          </p>
          <h2 className="text-2xl font-bold mb-2">Events and Friends 🥺</h2>
          <p className="mb-4 text-lg">
            This is the core of this entire portfolio, the purpose of this
            entire project because I'm a simp for everyone I'm including here
            and I still miss them a lot.
          </p>
        </div>
      </div>
    </div>
  );
}

// TODO: make the viewport thing s.t. when user is alrd 70% here, it would automatically focus on this section
// TODO: define max height and max width of each pic
// TODO: disable/auto-scroll when resizing while not focused on the section
// TODO: (optional) make the overlay for each image
export function FH_pics() {
  return (
    <ResizablePanelGroup
      // TODO: jsut make another structure for smaller screens
      orientation="horizontal"
      className="w-screen min-h-screen py-1 bg-teal-950"
    >
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={70}>
            <ResizablePanelGroup orientation="horizontal">
              <ResizablePanel defaultSize={60}>
                <img src={sommerEvent} className="w-full h-full object-cover" />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={40}>
                <ResizablePanelGroup orientation="vertical">
                  <ResizablePanel defaultSize={50}>
                    <img
                      src={polaroid_stud}
                      className="w-full h-full object-cover"
                    />
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50}>
                    <img
                      src={polaroid_LLM3}
                      className="w-full h-full object-cover"
                    />
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <img src={potluck1} className="w-full h-full object-cover" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>

      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={50}>
            <img src={potluck3_1} className="w-full h-full object-cover" />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex w-full h-full">
              <img src={potluck3} className="w-full object-cover" />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
