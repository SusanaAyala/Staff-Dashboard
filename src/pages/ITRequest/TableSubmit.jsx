import React, { useState, useRef } from 'react';

function TableSubmit() {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // For success message

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleRemoveFile = () => {
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setIssueType('');
      setDescription('');
      setFileName('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Hide success message after a few seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow border p-8"
    >
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Submit IT Request</h2>

      {/* Success Message */}
      {submitted && (
        <div className="mb-4 text-green-600 bg-green-100 border border-green-300 px-4 py-3 rounded">
          ✅ Your request was submitted successfully!
        </div>
      )}

      {/* Issue Type */}
      <div className="mb-5">
        <label className="block font-medium text-gray-700 mb-2">Issue Type</label>
        <select
          value={issueType}
          onChange={(e) => setIssueType(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-4 py-3 text-gray-800"
        >
          <option value="">Select an issue type</option>
          <option value="Hardware Issue">Hardware Issue</option>
          <option value="Software Issue">Software Issue</option>
          <option value="Network Issue">Network Issue</option>
          <option value="Access Request">Access Request</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block font-medium text-gray-700 mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Please provide detailed information about your issue"
          className="w-full border border-gray-300 rounded px-4 py-3 text-gray-800 min-h-[100px]"
        />
      </div>

      {/* File Upload */}
      <div className="mb-5">
        <label className="block font-medium text-gray-700 mb-2">File Upload</label>
        <div className="border border-dashed border-gray-300 rounded px-4 py-6 bg-gray-50 text-center cursor-pointer">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="w-full text-center cursor-pointer"
          />
        </div>
        {fileName && (
          <div className="mt-2 flex justify-between text-sm text-gray-700">
            <span>{fileName}</span>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="text-right mt-6">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition disabled:opacity-60 flex items-center gap-2"
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
              ></path>
            </svg>
          )}
          {loading ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
    </form>
  );
}

export default TableSubmit;
