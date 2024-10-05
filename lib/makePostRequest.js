import toast from "react-hot-toast";

export async function makeApiRequest({ setLoading, endpoint, data, resourceName, reset }) {
    const baseUrl = "http://localhost:3000";  // Corrected base URL
    try {
      setLoading(true);  // Correct usage
      const response = await fetch(`/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      console.log(response);
  
      if (response.ok) {
        toast.success(`New ${resourceName} created successfully`);
        reset();  // Reset the form
      } else {
        toast.error("Something went wrong");
        console.error("Failed to create resource:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while creating the resource:", error);
      toast.error("An error occurred while creating the resource");
    } finally {
      setLoading(false);  // Stop loading in all cases
    }
  }
  