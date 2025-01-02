import React from 'react';
    import { CheckCircle, ShieldCheck, Tag } from 'lucide-react';

    export default function WhiteLabelSection() {
      return (
        <div className="py-24 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">
                Your <span className="text-primary">System</span>, Your <span className="text-primary">Brand</span>, Your <span className="text-primary">Results</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our partnership is designed to empower you. Not only will we transform your agency, but we'll also provide you with a <span className="font-semibold">white label</span> system you can offer to your clients as your own.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dark-card p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <ShieldCheck className="h-8 w-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold text-white">
                      Offer a Proven Solution
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    Provide your clients with a cutting-edge appointment setting system that delivers real results, all under your brand.
                  </p>
                </div>
                <div className="bg-dark-card p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Tag className="h-8 w-8 text-primary mr-4" />
                    <h3 className="text-xl font-semibold text-white">
                      Increase Your Agency's Value
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    Expand your service offerings and increase your revenue by providing a high-demand <span className="font-semibold">white label</span> solution that sets you apart from the competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
