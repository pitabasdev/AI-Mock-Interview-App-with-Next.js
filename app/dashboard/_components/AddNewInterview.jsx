"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/GeminiAIModel";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const InputPrompt="Job position: "+jobPosition+", Job Description: "+jobDesc+", Years of Experience:"+jobExperience+", Depends on Job Position,Job Description & Year of Experience give us "+process.env.NEXT_INTERVIEW_QUESTIONS+" interview question along with Answer in JSON format,Give us Question and Answer field on JSON" ;
    const result=await chatSession.sendMessage(InputPrompt)
    console.log(result.response.text())

  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader className="flex justify-between items-center">
            <DialogTitle className="text-2xl text-left">
              Tell us more about your job interviewing
            </DialogTitle>
           
          </DialogHeader>
          <DialogDescription>
          
            *Please fill in the details below to start your interview session.
          </DialogDescription>
          <form onSubmit={onSubmit}>
            <div>
              <div className="mt-0 my-5">
                <label>Job Role/Job Position</label>
                <Input
                  type="text"
                  placeholder="e.g., Frontend Developer, Backend Engineer"
                  onChange={(e) => setJobPosition(e.target.value)} required
                />
              </div>
              <div className="my-5">
                <label>Job Description/ Tech Stack (In Short)</label>
                <Textarea
                  type="text"
                  placeholder="e.g., React, Node.js, MySQL; summarize key requirements"
                  onChange={(e) => setJobDesc(e.target.value)} required
                />
              </div>
              <div className="my-5 mb-8">
                <label>Years of Experience</label>
                <Input
                  type="number"
                  placeholder="e.g., 2 for two years of experience"
                  onChange={(e) => setJobExperience(e.target.value)} max="500" required
                />
              </div>
            </div>
            <div className="flex gap-5 justify-end">
              <Button variant="ghost" type="button" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button type="submit">Start Interview</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
