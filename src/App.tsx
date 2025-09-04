import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EarnMoney from "./pages/EarnMoney";
import OnlineJobs from "./pages/OnlineJobs";
import SideHustle from "./pages/SideHustle";
import OnlineSurveyJobs from "./pages/OnlineSurveyJobs";
import PaidSurveysOnline from "./pages/PaidSurveysOnline";
import CashForSurveys from "./pages/CashForSurveys";
import Serbia from "./pages/Serbia";
import Serbia2 from "./pages/Serbia2";
import India from "./pages/India";
import India2 from "./pages/India2";
import New from "./pages/New";
import MakeMoneyUs from "./pages/MakeMoneyUs";
import MakeMoneyCanada from "./pages/MakeMoneyCanada";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MakeMoneyUs />} />
          <Route path="/earn-money" element={<EarnMoney />} />
          <Route path="/online-jobs" element={<OnlineJobs />} />
          <Route path="/side-hustle" element={<SideHustle />} />
          <Route path="/online-survey-jobs" element={<OnlineSurveyJobs />} />
          <Route path="/paid-surveys-online" element={<PaidSurveysOnline />} />
          <Route path="/cash-for-surveys" element={<CashForSurveys />} />
          <Route path="/serbia" element={<Serbia />} />
          <Route path="/serbia2" element={<Serbia2 />} />
          <Route path="/india" element={<India />} />
          <Route path="/india2" element={<India2 />} />
          <Route path="/make-money" element={<New />} />
          <Route path="/make-money-us" element={<MakeMoneyUs />} />
          <Route path="/make-money-canada" element={<MakeMoneyCanada />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
