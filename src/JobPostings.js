import React, { useState, useEffect } from 'react';
import './style.css';

export default function JobPostings() {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [pageNumber, setPagenumber] = useState(0);

  useEffect(() => {
    const fetchJobIds = async () => {
      try {
        const jobsIdResp = await fetch(
          'https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty'
        );

        const jobIds = await jobsIdResp.json();
        setJobIds(jobIds);
      } catch (err) {}
    };
    fetchJobIds();
  }, []);
  useEffect(() => {
    if (jobIds.length > 0) {
      const currentPageJobIds = jobIds.slice(
        pageNumber * 6,
        (pageNumber + 1) * 6
      );
      console.log(currentPageJobIds);
      const fetchJobs = async () => {
        try {
          const jobsResp = await Promise.all(
            currentPageJobIds.map(async (jobId) => {
              const resp = await fetch(
                `https://hacker-news.firebaseio.com/v0/item/${jobId}.json?print=pretty`
              );
              return await resp.json();
            })
          );
          setJobs((jobs) => {
            return jobs.length === 0 ? jobsResp : [...jobs, ...jobsResp];
          });
        } catch (err) {}
      };
      fetchJobs();
    }
  }, [pageNumber]);

  const loadMore = () => {
    setPagenumber((page) => page + 1);
  };
  return (
    <>
      <div className="jobPostContainer">
        {jobs &&
          jobs.length > 0 &&
          jobs.map((job, index) => (
            <div className="jobPostContainer" key={index}>
              <div className="jobTile">
                <p>{job.title}</p>
              </div>
            </div>
          ))}
      </div>
      <button onClick={loadMore}>load more</button>
    </>
  );
}
