import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Msmeloan from "./pages/services/msme_loan";
import Termloan from "./pages/services/term_loan";
import WorkingCapital from "./pages/services/working_capital";
import SIDBI from "./pages/services/sidbi";
import ProjectFinance from "./pages/services/project_finance";
import Subsidy from "./pages/services/subsidy";

import BlogDetails from "./components/blogs/BlogDetail";
import ApplyForm from "./components/jobs/ApplyForm";
import Audit from "./pages/services/audit";
import InComeTax from "./pages/services/incometax";
import GST from "./pages/services/gst";
import RocWork from "./pages/services/rocwork";
import HomeLoan from "./pages/services/homeloan";
import LoanAgainstProperty from "./pages/services/loanagainstproperty";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/msme-loan" element={<Msmeloan />} />
          <Route path="/services/term-loan" element={<Termloan />} />
          <Route path="/services/working-capital-loan" element={<WorkingCapital />} />
          <Route path="/services/sidbi-loan" element={<SIDBI />} />
          <Route path="/services/project-finance-loan" element={<ProjectFinance />} />
          <Route path="/services/subsidy" element={<Subsidy />} />
          <Route path="/services/audit" element={<Audit />} />
          <Route path="/services/incom-tax" element={<InComeTax />} />
          <Route path="/services/gst" element={<GST />} />
          <Route path="/services/roc-work" element={<RocWork />} />
          <Route path="/services/home-loan" element={<HomeLoan />} />
          <Route path="/services/loan-against-property" element={<LoanAgainstProperty />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/applyjob/:_id/:jobtitle" element={<ApplyForm />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
