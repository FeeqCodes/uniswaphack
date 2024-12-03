import IloForm from "@/app/components/Create-ilo-form/IloForm";
import React from "react";

const CreateILOPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#1F211C] relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-40 w-96 h-96 bg-gradient-to-r from-[#644881] to-transparent rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-r from-[#448175] to-transparent rounded-full blur-[150px] opacity-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">
              Create ILO Pool
            </h1>
            <p className="text-gray-400 max-w-xl">
              Launch your token with customizable parameters and built-in
              liquidity protection mechanisms
            </p>
          </div>
          <div className="bg-[#1F211C]/60 p-4 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">Current Gas Price</p>
            <p className="text-2xl font-bold text-white">12 GWEI</p>
          </div>
        </div>

        <IloForm />
      </div>
    </div>
  );
};

export default CreateILOPage;
