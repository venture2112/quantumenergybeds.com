"use client";

import { useState, useEffect } from "react";

export default function ROICalculator() {
  const [sessionsPerWeek, setSessionsPerWeek] = useState(10);
  const [pricePerSession, setPricePerSession] = useState(75);
  const [weeksPerYear, setWeeksPerYear] = useState(52);
  const [monthlyRevenue, setMonthlyRevenue] = useState(3250);
  const [annualRevenue, setAnnualRevenue] = useState(39000);
  const [monthsToRoi, setMonthsToRoi] = useState(4.6);

  useEffect(() => {
    const investment = 14900;
    const weeklyRevenue = sessionsPerWeek * pricePerSession;
    // Calculate monthly based on selected weeks per year
    const monthlyRev = (weeklyRevenue * weeksPerYear) / 12;
    const annualRev = weeklyRevenue * weeksPerYear;
    const roi = investment / monthlyRev;

    setMonthlyRevenue(Math.round(monthlyRev));
    setAnnualRevenue(Math.round(annualRev));
    setMonthsToRoi(parseFloat(roi.toFixed(1)));
  }, [sessionsPerWeek, pricePerSession, weeksPerYear]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">ROI Calculator</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
            Calculate Your Return
          </h2>
          <p className="text-slate-600 text-lg">
            See how quickly your quantum wellness investment pays for itself. Product investment: $14,900
          </p>
        </div>
        
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Sessions per Week</label>
              <select 
                value={sessionsPerWeek}
                onChange={(e) => setSessionsPerWeek(parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
              >
                <option value={5}>5 sessions</option>
                <option value={10}>10 sessions</option>
                <option value={15}>15 sessions</option>
                <option value={20}>20 sessions</option>
                <option value={25}>25 sessions</option>
                <option value={30}>30 sessions</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Price per Session</label>
              <select 
                value={pricePerSession}
                onChange={(e) => setPricePerSession(parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
              >
                <option value={60}>$60</option>
                <option value={75}>$75</option>
                <option value={100}>$100</option>
                <option value={125}>$125</option>
                <option value={150}>$150</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Operating Weeks/Year</label>
              <select 
                value={weeksPerYear}
                onChange={(e) => setWeeksPerYear(parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
              >
                <option value={48}>48 weeks</option>
                <option value={50}>50 weeks</option>
                <option value={52}>52 weeks</option>
              </select>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200">
              <p className="text-sm text-slate-600 mb-2">Monthly Revenue</p>
              <p className="text-3xl font-bold text-blue-600">${monthlyRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200">
              <p className="text-sm text-slate-600 mb-2">Annual Revenue</p>
              <p className="text-3xl font-bold text-blue-600">${annualRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200">
              <p className="text-sm text-slate-600 mb-2">Months to ROI</p>
              <p className="text-3xl font-bold text-green-600">{monthsToRoi}</p>
            </div>
          </div>
          
          <p className="text-center text-slate-500 text-sm mt-6">
            *Calculations based on $14,900 product investment. Does not include operating costs.
          </p>
        </div>
      </div>
    </section>
  );
}
