import { useState } from "react";

export function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectName: "",
    tgeDate: "",
    stage: "",
    objective: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in a real application, this would send to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your submission. We will review your application and respond within 48 hours.");
    setFormData({
      name: "",
      email: "",
      projectName: "",
      tgeDate: "",
      stage: "",
      objective: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#0B0B0D] min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-2xl w-full">
        <h1
          style={{ fontFamily: 'var(--font-serif)' }}
          className="text-[clamp(2.5rem,6vw,4rem)] text-[#F5F5F7] font-light leading-[1.2] mb-8 tracking-tight text-center"
        >
          Strategic Evaluation.
        </h1>
        <div className="text-center mb-16">
          <p className="text-[#636366] text-base leading-relaxed">
            We accept a limited number of token launch architectures per cycle to ensure absolute precision.
          </p>
          <p className="text-[#636366] text-base leading-relaxed mt-2">
            Please provide context below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-[#F5F5F7] text-sm mb-3 tracking-wide">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#E5E7EB]/30 text-[#F5F5F7] py-3 focus:outline-none focus:border-[#E5E7EB] transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#F5F5F7] text-sm mb-3 tracking-wide">
              Professional Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#E5E7EB]/30 text-[#F5F5F7] py-3 focus:outline-none focus:border-[#E5E7EB] transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="projectName" className="block text-[#F5F5F7] text-sm mb-3 tracking-wide">
              Project / Protocol Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#E5E7EB]/30 text-[#F5F5F7] py-3 focus:outline-none focus:border-[#E5E7EB] transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="tgeDate" className="block text-[#F5F5F7] text-sm mb-3 tracking-wide">
              Projected TGE Date
            </label>
            <input
              type="text"
              id="tgeDate"
              name="tgeDate"
              placeholder="Q2 2026"
              value={formData.tgeDate}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#E5E7EB]/30 text-[#F5F5F7] py-3 focus:outline-none focus:border-[#E5E7EB] transition-colors duration-300 placeholder:text-[#636366]"
            />
          </div>

          <div>
            <label htmlFor="stage" className="block text-[#F5F5F7] text-sm mb-3 tracking-wide">
              Current Stage
            </label>
            <select
              id="stage"
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              required
              className="w-full bg-[#0B0B0D] border-b border-[#E5E7EB]/30 text-[#F5F5F7] py-3 focus:outline-none focus:border-[#E5E7EB] transition-colors duration-300"
            >
              <option value="" className="bg-[#0B0B0D] text-[#636366]">Select stage</option>
              <option value="pre-seed" className="bg-[#0B0B0D]">Pre-seed</option>
              <option value="seed" className="bg-[#0B0B0D]">Seed</option>
              <option value="live-protocol" className="bg-[#0B0B0D]">Live Protocol</option>
              <option value="other" className="bg-[#0B0B0D]">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="objective" className="block text-[#F5F5F7] text-sm mb-3 tracking-wide">
              Strategic Objective (Brief)
            </label>
            <textarea
              id="objective"
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-transparent border border-[#E5E7EB]/30 text-[#F5F5F7] py-3 px-4 focus:outline-none focus:border-[#E5E7EB] transition-colors duration-300 resize-none"
            />
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="w-full px-12 py-4 border border-[#E5E7EB] text-[#F5F5F7] text-sm tracking-wide hover:bg-[#E5E7EB] hover:text-[#0B0B0D] transition-all duration-300"
            >
              Submit for Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
