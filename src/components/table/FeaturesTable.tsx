import { featuresTableData } from "../../data";
import check from "./../../assets/images/check.svg";

export default function FeaturesTable() {
  return (
    <table className="my-40-8 w-[80%] max-w-[1000px] table-fixed border-collapse text-[.72rem] font-medium tracking-widest md:text-sm md:font-semibold sm-max:w-[90%]">
      <thead>
        <tr className="border-b-[1px] border-b-black">
          <th className="py-24-8 text-start">THE FEATURES</th>
          <th>BASIC</th>
          <th>PRO</th>
          <th>BUSINESS</th>
        </tr>
      </thead>
      <tbody className="my-16-8 ">
        {featuresTableData.map(({ feature, plan }, index) => {
          return (
            <tr className="bg-red border-b-[1px] border-b-gray-200 p-4">
              <td className="py-24-8">{feature}</td>
              <td>
                {plan[0] && (
                  <img
                    src={check}
                    className={`mx-auto block h-auto w-[12px] bg-check bg-contain bg-center bg-no-repeat`}
                  />
                )}
              </td>
              <td className="p-4">
                {plan[1] && (
                  <img
                    src={check}
                    className={`mx-auto block h-auto w-[12px] bg-check bg-contain bg-center bg-no-repeat`}
                  />
                )}
              </td>
              <td className="p-4">
                {plan[2] && (
                  <img
                    src={check}
                    className={`mx-auto block h-auto w-[12px] bg-check bg-contain bg-center bg-no-repeat`}
                  />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
