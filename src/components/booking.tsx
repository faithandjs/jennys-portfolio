import { Modal, MultiSelect, NumberInput, TextInput } from "@mantine/core";
import { DatePickerInput, DateTimePicker, DatesProvider } from "@mantine/dates";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import * as Yup from "yup";
import { getDateTime } from "../utils";

interface InputType {
  unit: string;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  guestNumber: number;
}
export default function Booking({
  open,
  close,
  unit,
}: {
  open: boolean;
  close: () => void;
  unit?: number;
}) {
  const { getInputProps, setFieldValue, setValues, onSubmit, values, reset } =
    useForm({
      initialValues: {
        name: "",
        unitData: [] as InputType[],
      },
      validate: yupResolver(
        Yup.object().shape({
          name: Yup.string()
            .min(3, "Name should have at least 3 letters")
            .required(),
          unitData: Yup.array().of(
            Yup.object().shape({
              unit: Yup.string().required(),
              checkInDate: Yup.string().required(
                "Please enter check-in date and time"
              ),
              checkOutDate: Yup.string().required(
                "Please enter check-out date"
              ),
              guestNumber: Yup.number()
                .max(6, "maximum of 6 guests ")
                .min(0, "minimum of 0 guests "),
            })
          ),
        })
      ),
    });

  useEffect(() => {
    setValues({
      name: "",
      unitData: unit
        ? [
            {
              checkInDate: null,
              checkOutDate: null,
              guestNumber: 1,
              unit: `Unit ${unit}`,
            },
          ]
        : ([] as InputType[]),
    });
  }, [unit, open]);

  return (
    <div className="booking">
      <Modal
        opened={open}
        onClose={() => {
          reset();
          close();
        }}
        title={`Book Unit ${unit ?? ""}`}
        closeOnClickOutside={false}
        closeButtonProps={{
          icon: <IoClose size={20} />,
        }}
        classNames={{
          content: "lg:min-w-[700px] w-full sm:p-6 !pt-0 px-5 ",
          inner: "!px-1 md:!px-4",
        }}
        styles={{
          content: {
            borderRadius: "1.5rem",
            minHeight: "unset",
            height: "max-content",
          },
          body: {
            padding: "3rem 0 .5rem",
          },
          header: {
            borderBottom: "1px solid #e6e6e6",
            padding: "1.3rem 0 1rem ",
          },
          title: { fontSize: "1.6rem", fontWeight: "500" },
          close: {
            border: "2px solid black",
            borderRadius: "50%",
            color: "black",
            fontWeight: "bold",
            outline: 0,
          },
        }}
      >
        <form
          onSubmit={onSubmit((values) => {
            const data = {
              ...values,
              unitData: values.unitData.map((item) => ({
                ...item,
                checkInDate: getDateTime(item.checkInDate!, true),
                checkOutDate: getDateTime(item.checkOutDate!, false),
              })),
            };
            console.log(data);

            const whatsappLink = `https://wa.me/2348172994910?text=`;
            let message = `${encodeURIComponent(`Name: ${data.name}`)}%0A`;

            data.unitData.forEach((unit) => {
              message += `${encodeURIComponent(
                `${unit.unit}: ${unit.checkInDate} - ${unit.checkOutDate}, ${
                  unit.guestNumber
                } ${unit.guestNumber > 1 ? "guests" : "guest"}`
              )}%0A`;
            });
            const finalLink = whatsappLink + message;

            window.open(finalLink, "_blank");
          })}
        >
          <div className="grid gap-6 pb-10">
            <TextInput
              label="Full Name"
              required
              {...getInputProps("name")}
              placeholder="Enter Name"
            />
            <MultiSelect
              label="Select Units"
              value={values.unitData.map((i) => i.unit)}
              onChange={(selectedUnits) => {
                const temp = selectedUnits.map((unit) => {
                  const oldUnit = values.unitData.find(
                    (item) => item.unit === unit
                  );

                  if (oldUnit) {
                    return oldUnit;
                  } else {
                    return {
                      unit,
                      checkInDate: null,
                      checkOutDate: null,
                      guestNumber: 1,
                    };
                  }
                });
                console.log(temp);
                setFieldValue(`unitData`, temp);
              }}
              required
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => `Unit ${item}`)}
            />

            <DatesProvider settings={{ consistentWeeks: true }}>
              <div>
                {values.unitData.map((item, key) => {
                  return (
                    <div key={key} className="grid gap-2 py-3">
                      <p className="text-xs text-ink uppercase">{item.unit}</p>
                      <div className="grid grid-cols-1 gap-2 unit-box">
                        <DateTimePicker
                          clearable
                          label="Check-in date and Time"
                          placeholder="Pick date and time"
                          valueFormat="MMMM D, YYYY - hh:mm A"
                          timeInputProps={{}}
                          required
                          minDate={new Date()}
                          // maxDate={
                          //   values.unitData[key].checkOutDate ?? undefined
                          // }
                          {...getInputProps(`unitData.${key}.checkInDate`)}
                        />

                        <DatePickerInput
                          label="Check-out date"
                          placeholder="Pick date"
                          required
                          minDate={
                            values.unitData[key].checkInDate ?? new Date()
                          }
                          {...getInputProps(`unitData.${key}.checkOutDate`)}
                        />

                        <NumberInput
                          label="Guests"
                          max={6}
                          min={0}
                          required
                          {...getInputProps(`unitData.${key}.guestNumber`)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </DatesProvider>
          </div>
          <button className="btn bg-black text-white">Proceed</button>
        </form>
      </Modal>
    </div>
  );
}
