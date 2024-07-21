import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Profiles = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const CHART_API = process.env.REACT_APP_CHART_API_URL;
  const controller = "OrganizationChart/";
  const mainImageUrl = "https://app.enjoylife.ir/filestorage/";
  const profiler = "/profile/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${CHART_API}${controller}All`);
        setData(response.data);
      } catch (error) {
        alert("خطایی رخ داده است.");
      }
    };
    fetchData();
  }, [id, CHART_API, controller]);

  return (
    <div className="relative h-screen w-screen bg-[#f3f3f3] rtl:ml-0" dir="rtl">
      <div className="text-2xl p-5">
        <p className="pt-5 text-black-500 font-bold bg-yellow-300 w-auto pb-5 text-center rounded-r-lg rounded-l-lg">
          پرسنل ساختمان پانامرا
        </p>
      </div>
      <div className="p-5 relative overflow-x-auto">
        <table className="rounded-xl w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                عنوان شغلی
              </th>
              <th scope="col" className="px-6 py-3">
                نام و نام خانوادگی
              </th>
              <th scope="col" className="px-6 py-3">
                تصویر پرسنلی
              </th>
              <th scope="col" className="px-6 py-3">
                کد پرسنلی
              </th>
              <th scope="col" className="px-6 py-3">
                محل خدمت
              </th>
              <th scope="col" className="px-6 py-6">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return item.users.map((user, userIndex) => (
                <tr
                  key={`${index}-${userIndex}`}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.title ? item.title : "ثبت نشده"}
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold">
                      {user.name ? user.name : "ثبت نشده"}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    {user.imgUrl ? (
                      <img
                        src={mainImageUrl + user.imgUrl}
                        alt="تصویر پرسنلی"
                        className="w-10 rounded-full shadow-2xl"
                      />
                    ) : (
                      "تصویر موجود نیست"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {user.personalCode ? user.personalCode : "ثبت نشده"}
                  </td>
                  <td className="px-6 py-4">
                    {user.activityLocation ? user.activityLocation : "ثبت نشده"}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={profiler + user.personnelNumber}
                      target="_new"
                      className="w-3/4 bg-yellow-300 pl-5 pr-5 pt-1 pb-1 rounded-2xl text-black hover: text-red"
                    >
                      مشاهده
                    </a>
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
      <div className="container-fluid bg-transparent w-auto">
        <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white lg:text-left">
          <div className="container p-6">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div>
                <a href="#" className="bg-yellow-500 hover:bg-blue-500 hover:text-white text-white w-auto p-3 block rounded-lg">اپلیکیشن انجوی لایف</a>
              </div>
              <div>
                <a href="#" className="bg-yellow-500 hover:bg-blue-500 hover:text-white text-white w-auto p-3 block rounded-lg">وب سایت انجوی لایف</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Profiles;
