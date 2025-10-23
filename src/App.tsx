import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MakeMoneyUs from "./pages/MakeMoneyUs";
import HeyCash from "./pages/HeyCash";
import LpHey from "./pages/LpHey";
import SurveyPollPh from "./pages/SurveyPollPh";
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
          <Route path="/hey-cash" element={<HeyCash />} />
          <Route path="/survey-poll" element={<LpHey />} />
          <Route path="/survey-poll-ph" element={<SurveyPollPh />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
