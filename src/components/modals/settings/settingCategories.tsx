import { SETTINGS_CATEGORIES } from "~/data/settingsData";

export default function SettingCategories() {
  return (
    <ul className="w-full">
      {SETTINGS_CATEGORIES.map((item) => (
        <li
          key={item.id}
          className="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 py-2 px-4"
        >
          <button className="text-sm font-medium text-gray-700 dark:text-gray-200 w-full flex items-center space-x-2 justify-start border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            {item.icon && <item.icon className="size-6 primary-text" />}
            <label className="primary-text text-sm font-enka">
              {item.title}
            </label>
          </button>
          <div className="my-4 mx-4 md:mx-8 lg:mx-12">
            {item.content && <item.content />}
          </div>
        </li>
      ))}
    </ul>
  );
}
