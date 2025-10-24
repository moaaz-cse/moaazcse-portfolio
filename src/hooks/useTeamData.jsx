import { useState, useEffect } from "react";

/**
 * Custom hook for fetching and managing team data
 * @param {string} apiUrl - The API endpoint to fetch team data from
 * @returns {Object} - { team, loading, error, refetch }
 */
const useTeamData = (apiUrl) => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTeam = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Validate data format
      if (!Array.isArray(data)) {
        throw new Error("Invalid data format: expected an array");
      }

      setTeam(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching team data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiUrl) {
      fetchTeam();
    }
  }, [apiUrl]);

  return {
    team,
    loading,
    error,
    refetch: fetchTeam,
  };
};

export default useTeamData;

/*
 * Expected API Response Format:
 *
 * [
 *   {
 *     "image": "https://example.com/image1.jpg",
 *     "name": "Michael Scout",
 *     "role": "Co-founder, Chief Architect",
 *     "portfolio": "https://michaelscout.com"
 *   },
 *   {
 *     "image": "https://example.com/image2.jpg",
 *     "name": "Pam Beesly",
 *     "role": "Creative Director",
 *     "portfolio": "https://pambeesly.com"
 *   }
 * ]
 */