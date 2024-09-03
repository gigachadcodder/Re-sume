import React, { useState } from "react";
import PersonalDetails from "./forms/PersonalDetails";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false)
  return (
    <div>
      <div className="flex justify-between items-center py-4 ">
        <Button variant="outline" className="flex gap-2">
          <LayoutGrid />
          Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button className="gap-2" size="sm"
            onClick={()=> setActiveFormIndex(activeFormIndex-1)}
            >
              {" "}
              <ArrowLeft /> Back{" "}
            </Button>
          )}
          <Button
          disabled={!enableNext}
           className="flex gap-2" size="sm"
          onClick={()=> setActiveFormIndex(activeFormIndex+1)}
          >
            Next <ArrowRight />{" "}
          </Button>
        </div>
      </div>
      {/* personal details */}
      {activeFormIndex==1?  <PersonalDetails enableNext={(v)=>setEnableNext(v)} /> : null }
     
      {/* summary */}

      {/* experience */}

      {/* Educational Details */}

      {/* skills */}
    </div>
  );
};

export default FormSection;
