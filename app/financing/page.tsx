'use client';

import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Financing() {
  const [productPrice, setProductPrice] = useState(14900);
  const [downPayment, setDownPayment] = useState(0);
  const [termMonths, setTermMonths] = useState(36);
  const [interestRate, setInterestRate] = useState(14.99);
  const [monthlyPayment, setMonthlyPayment] = useState(348);

  useEffect(() => {
    const principal = productPrice - downPayment;
    let payment;
    
    if (interestRate === 0) {
      payment = principal / termMonths;
    } else {
      const monthlyRate = interestRate / 100 / 12;
      payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    }
    
    setMonthlyPayment(Math.round(payment));
  }, [productPrice, downPayment, termMonths, interestRate]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />

      {/* Hero with Background Image */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="Financing Options" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              Financing{" "}
              <span className="text-gradient">Options</span>
            </h1>
            <p className="text-xl text-slate-600">
              Making quantum wellness accessible with flexible payment solutions
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Invest in Your Wellness
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              We believe everyone should have access to the transformative benefits of quantum 
              energy technology. That&apos;s why we offer a variety of financing options to fit your budget.
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              We partner with trusted financing providers to offer affordable payment plans that fit your budget. Spread the cost of your Quantum Energy Bed over time with manageable monthly payments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Affirm", 
                desc: "Secure transparent financing with fixed monthly payments. Choose terms from 3 to 36 months with competitive rates and no hidden fees. Check eligibility instantly without affecting your credit score." 
              },
              { 
                title: "Afterpay", 
                desc: "Split your purchase into four interest-free payments, due every two weeks. Acquire your Quantum Energy Bed now and pay over time with minimal credit checks for most purchases." 
              },
              { 
                title: "Klarna", 
                desc: "Enjoy flexible options including four interest-free installments or longer-term financing with competitive rates. Select a plan at checkout for instant approval and clear terms." 
              },
            ].map((option, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-slate-200 bg-slate-50 text-center hover:bg-blue-50/50 hover:border-blue-300 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-slate-900">{option.title}</h3>
                <p className="text-slate-600 mb-6">{option.desc}</p>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  OAC
                </span>
              </div>
            ))}
          </div>

          {/* Payment Calculator */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4 text-center">
              Calculate Your Investment
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto text-center">
              Estimate your monthly payments. Actual rates and terms depend on credit approval.
            </p>
            
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Product Price</label>
                  <select 
                    value={productPrice} 
                    onChange={(e) => setProductPrice(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                  >
                    <option value={14900}>$14,900 - Wellness Pod</option>
                    <option value={18900}>$18,900 - Wellness Pod Pro</option>
                    <option value={24900}>$24,900 - Wellness Pod Elite</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Down Payment</label>
                  <select 
                    value={downPayment} 
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                  >
                    <option value={0}>$0</option>
                    <option value={2000}>$2,000</option>
                    <option value={5000}>$5,000</option>
                    <option value={10000}>$10,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Term (Months)</label>
                  <select 
                    value={termMonths} 
                    onChange={(e) => setTermMonths(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                  >
                    <option value={12}>12 months</option>
                    <option value={24}>24 months</option>
                    <option value={36}>36 months</option>
                    <option value={48}>48 months</option>
                    <option value={60}>60 months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Estimated APR</label>
                  <select 
                    value={interestRate} 
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                  >
                    <option value={0}>0% (Promotional)</option>
                    <option value={9.99}>9.99%</option>
                    <option value={14.99}>14.99%</option>
                    <option value={19.99}>19.99%</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 text-center mb-6">
                <p className="text-sm text-slate-600 mb-2">Estimated Monthly Payment</p>
                <p className="text-4xl font-bold text-blue-600">${monthlyPayment.toLocaleString()}</p>
                <p className="text-xs text-slate-500 mt-2">*Estimated payment upon credit approval. Actual terms may vary.</p>
              </div>
              
              <Link 
                href="/contact/" 
                className="block w-full text-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Apply for Financing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
