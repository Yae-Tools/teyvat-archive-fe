import { SETTINGS_CATEGORIES } from "~/data/settingsData";

export default function SettingCategories() {
  return (
    <ul className="w-full">
      {SETTINGS_CATEGORIES.map((item) => (
        <li
          key={item.id}
          className="my-2 rounded-lg bg-gray-100 px-4 py-2 dark:bg-gray-800"
        >
          <button className="flex w-full items-center justify-start space-x-2 border-b-1 border-gray-200 pb-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-200">
            {item.icon && <item.icon className="primary-text size-6" />}
            <label className="primary-text font-enka text-sm">
              {item.title}
            </label>
          </button>
          <div className="mx-4 my-2 md:mx-8 lg:mx-12">
            {item.content && <item.content />}
          </div>
        </li>
      ))}
    </ul>
  );
}
