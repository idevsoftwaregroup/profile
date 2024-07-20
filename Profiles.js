import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const ProfilePage = () => {
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
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                    {user.name ? user.name : "ثبت نشده"}
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
                  <td className="px-6 py-4">{user.personalCode ? user.personalCode : "ثبت نشده"}</td>
                  <td className="px-6 py-4">{user.activityLocation ? user.activityLocation : "ثبت نشده"}</td>
                  <td className="px-6 py-4"><a href={profiler + user.personnelNumber} target="_new" className="w-3/4 bg-yellow-300 pl-5 pr-5 pt-1 pb-1 rounded-2xl text-black hover: text-red">مشاهده</a></td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
