

function TaskModal({ onClose }) {
  return (
    <div className="task-modal fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-3xl">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="mb-6 pb-6 border-b border-gray-100">
            {/* <a
              href="./index.html"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <BackSvg />
              Back to board
            </a> */}

            <h1 className="text-3xl font-bold text-gray-900 mt-4">
              Add Task
            </h1>
            <p className="text-sm text-gray-500">
              Create a card for your board.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >Task Title</label
                >
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="e.g. Wireframes"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >Task Subtitle / Description</label
                >
                <input
                  id="description"
                  name="description"
                  placeholder="Add context or acceptance criteria"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="tag"
                  className="block text-sm font-medium text-gray-700"
                >Tag</label
                >
                <select
                  id="tag"
                  name="tag"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                >
                  <option value="design">Design</option>
                  <option value="operations">Operations</option>
                  <option value="marketing">Marketing</option>
                  <option value="creative">Creative</option>
                  <option value="development">Development</option>
                  <option value="backend">Backend</option>
                  <option value="setup">Setup</option>
                  <option value="infrastructure">
                    Infrastructure
                  </option>
                  <option value="documentation">
                    Documentation
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >Due Date</label
                >
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >Status</label
                >
                <select
                  id="status"
                  name="status"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                >
                  <option value="todo">To-do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href="#"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >Cancel</a
              >
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TaskModal;