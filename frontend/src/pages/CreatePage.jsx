import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
     <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl mx-auto w-[500px] shadow-lg max-w-xl  border    border-[#3a24bc]">
              <h2 className="text-2xl font-semibold text-[#3a24bc] mb-6 text-center">
                Create a New Note
              </h2>

              {/* Title Input */}
              <div className="form-control flex flex-col align-middle mb-6">
                <label className="label mb-2">
                  <span className="text-[#3a24bc] font-medium">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note Title"
                  className="input input-bordered border-[#3a24bc] focus:outline-none focus:ring-2 focus:ring-[#3a24bc] focus:border-[#3a24bc] text-[#3a24bc] placeholder-[#b3acf2]"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Content Textarea */}
              <div className="form-control flex flex-col justify-center mb-6">
                <label className="label mb-2">
                  <span className="text-[#3a24bc] font-medium">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered border-[#3a24bc] h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#3a24bc] focus:border-[#3a24bc] text-[#3a24bc] placeholder-[#b3acf2]"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

            {/* Submit Button */}
            <div className="card-actions justify-center">
              <button
                type="submit"
                className="btn bg-[#3a24bc] text-white hover:bg-[#2a1a96] transition-all duration-300 px-6"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Note"}
              </button>
            </div>
</form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;