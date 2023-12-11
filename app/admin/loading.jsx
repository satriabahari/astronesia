export default function Loading() {
  return (
    <section className="grid grid-rows-[10%_5.5%_auto] gap-y-6 p-4 pt-[4.6rem]">
      <div className="flex flex-col justify-between  rounded-lg bg-gray-50 px-8 py-2 dark:bg-gray-700">
        <span className="h-6 w-40 rounded-md bg-gray-200 dark:bg-gray-800"></span>
        <span className="h-4 w-48 rounded-md bg-gray-200 dark:bg-gray-800"></span>
      </div>

      <div className="flex justify-between">
        <div className="w-full md:w-auto flex items-center gap-x-2 rounded-md bg-gray-50 p-2 dark:bg-gray-700">
          <span className="h-full w-4 rounded-md bg-gray-200 dark:bg-gray-800"></span>
          <span className="h-full md:w-48 w-full rounded-md bg-gray-200 dark:bg-gray-800"></span>
        </div>
        <div className="hidden md:flex items-center gap-x-2 rounded-md bg-gray-100 p-2 dark:bg-gray-700">
          <span className="h-full w-4 rounded-md bg-gray-200 dark:bg-gray-800"></span>
          <span className="h-full w-24 rounded-md bg-gray-200 dark:bg-gray-800"></span>
        </div>
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-y-4 rounded-xl bg-gray-50 px-8 py-4 dark:bg-gray-700">
        <span className="h-8 w-full rounded-md bg-gray-200 dark:bg-gray-800"></span>
        <span className="h-full w-full rounded-md bg-gray-200 dark:bg-gray-800"></span>
      </div>
    </section>
  );
}
