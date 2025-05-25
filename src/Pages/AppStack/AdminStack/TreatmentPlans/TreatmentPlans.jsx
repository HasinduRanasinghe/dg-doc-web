import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toaster from "../../../../Utils/Toaster/Toaster";
import axios from "axios";
import TreatmentResultsDisplay from "./TreatmentResultsDisplay";
import BreadCrumb from "../../../../Components/BreadCrumb/BreadCrumb";
import TreatmentForm from "./TreatmentForm";

export default function TreatmentPlans() {
  const [loading, setLoading] = useState(false);
  const [treatmentPlan, setTreatmentPlan] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.age ||
      !formData.cdrScore ||
      !formData.mmseScore ||
      !formData.caregiverAvailability ||
      !formData.appointmentDate ||
      !formData.appointmentTime
    ) {
      Toaster.justToast("error", "Please fill in all required fields.");
      return;
    }

console.log("Form Data:", formData);

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/plan/",
        {
          id: formData.appointmentId || new Date().getTime().toString(),
          firstName: formData.firstName,
          lastName: formData.lastName,
          fullName: `${formData.firstName} ${formData.lastName}`,
          age: Number(formData.age),
          cdrScore: Number(formData.cdrScore),
          mmseScore: Number(formData.mmseScore),
          caregiverAvailability: formData.caregiverAvailability.toUpperCase(),
          additionalNotes: formData.additionalNotes,
          appointmentDate: formData.appointmentDate,
          timeSlot: formData.appointmentTime,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const result = response.data;

      if (result.error) {
        Toaster.justToast("error", result.error);
      } else {
        setTreatmentPlan(result); // Set the treatment plan data for display
      }
    } catch (error) {
      Toaster.justToast("error", "Failed to fetch treatment plan.");
      console.error("API Error:", error);
    }
    setLoading(false);
  };

  return (
    <main className="main-content-wrapper">
      <div className="container">
        <BreadCrumb
          page={"Treatment Plans"}
          icon={"fa-solid fa-file-contract"}
        />
        <div className="row">
          <div className="col-xl-12 col-12 mb-5">
            <div className="card h-100 card">
              <div className="p-6">
                <h4 className="fw-bold text-primary">
                  Generate Personalized Treatment Plan
                </h4>

                {treatmentPlan ? (
                  <TreatmentResultsDisplay treatmentPlan={treatmentPlan} />
                ) : (
                  <TreatmentForm
                    onSubmit={handleFormSubmit}
                    loading={loading}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
