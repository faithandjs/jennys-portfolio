import React from "react";
import { Accordion } from "@mantine/core";
import { PiPlusBold } from "react-icons/pi";

export default function FAQ() {
  const faqs = [
    {
      q: "What is your check-in/check-out policy?",
      a: "Check-in time is 3:00 PM, and check-out time is 11:00 AM. We offer flexibility whenever possible – just let us know in advance.",
    },
    {
      q: "How do I get to your property from the airport?",
      a: "We recommend using MRT or ride-sharing services] for the most convenient and cost-effective commute. Detailed directions are available in our guidebook.",
    },
    {
      q: "Is parking available on-site?",
      a: "Yes, we have free parking available for one car. Please let us know in advance if you'll be arriving with a vehicle.",
    },
    {
      q: "Are there any grocery stores or restaurants nearby?",
      a: "Absolutely! We have a variety of dining options and grocery stores within a short walking/driving distance. Feel free to check our guidebook for recommendations,",
    },
    {
      q: "How can I contact you during my stay if I have questions or issues?",
      a: "You can reach us through the messaging platform or call/text us. We're availabe to assist you 24/7.",
    },
    // {
    //   q: '',
    //   a: '',
    // },
  ];

  return (
    <section className=" justify-start" id="FAQ" >
      <div className="sm:flex gap-6 lg:gap-14 w-full">
        <h3 className="text-4xl font-medium pb-4">FAQ</h3>
        {/* change */}
        <div className="w-full h-max bg-[#f9f9f9] px-3 py-3 rounded-2xl">
          <Accordion
          
            chevronPosition="left"
            multiple={true}
            mx="auto"
            className="w-full"
            classNames={{
              chevron: "transition-all duration-200 !w-[24px] !ml-0",
            }}
            chevron={<PiPlusBold className={`text-[#aeaeae] active:!rotate-45`} size={24} />}
            
          >
            {faqs.map(({ q, a }, key) => (
              <Accordion.Item
                value={q}
                key={key}
                className="py-2 last:border-0 active:child:child:child:rotate-45 active:child:child:rotate-0"
              >
                <Accordion.Control className="hover:cursor-pointer text-ink !text-lg  ">
                  {q}
                </Accordion.Control>
                <Accordion.Panel className="pl-8 text-xl font-medium  ">
                  {a}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
