// supabase-config.js

const SUPABASE_CONFIG = {
    url: 'https://csnzntoyjrgydkovxdbb.supabase.co',
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzbnpudG95anJneWRrb3Z4ZGJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1ODU2NjYsImV4cCI6MjA1NDE2MTY2Nn0.7_CB78ueOwwLYq2QkCUO8dcnWA0rsuuWymOBYKhN-8M'
};

const dbOperations = {
    getPreviousConferences: async () => {
        try {
            const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/previous_conferences?select=*&order=year.desc`, {
                headers: {
                    'apikey': SUPABASE_CONFIG.apiKey,
                    'Authorization': `Bearer ${SUPABASE_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Error fetching conferences:', err);
            return null;
        }
    },
    getCallForPapers: async () => {
        try {
            const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/call_for_papers?select=*`, {
                headers: {
                    'apikey': SUPABASE_CONFIG.apiKey,
                    'Authorization': `Bearer ${SUPABASE_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Error fetching call for papers:', err);
            return null;
        }
    },
    getCommitteeMembers: async () => {
        try {
            const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/committee_members?select=*&order=last_name.asc`, {
                headers: {
                    'apikey': SUPABASE_CONFIG.apiKey,
                    'Authorization': `Bearer ${SUPABASE_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (err) {
            console.error('Error fetching committee members:', err);
            return null;
        }
    },
    getKeynotesSpeakers: async function() {
        try {
            console.log('Fetching keynote speakers from Supabase...');
            
            // Make sure SUPABASE_CONFIG is defined before using it
            if (!SUPABASE_CONFIG || !SUPABASE_CONFIG.url || !SUPABASE_CONFIG.apiKey) {
                console.error('SUPABASE_CONFIG is not properly defined');
                return [];
            }
            
            const response = await fetch(
                `${SUPABASE_CONFIG.url}/rest/v1/keynote_speakers?select=*`, {
                headers: {
                    'apikey': SUPABASE_CONFIG.apiKey,
                    'Authorization': `Bearer ${SUPABASE_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                console.error(`API error: ${response.status} ${response.statusText}`);
                throw new Error(`API error: ${response.status} ${response.statusText}`);
            }
    
            const speakers = await response.json();
            console.log('Successfully fetched keynote speakers:', speakers);
            return speakers;
        } catch (error) {
            console.error('Error fetching keynote speakers:', error);
            throw error; // Re-throw to be handled by the calling function
        }
    },
    getOrganizationMembers: async () => {
        try {
            const response = await fetch(
                `${SUPABASE_CONFIG.url}/rest/v1/organization_members?select=*,organization_roles(*)&order=organization_roles(display_order).asc`, {
                headers: {
                    'apikey': SUPABASE_CONFIG.apiKey,
                    'Authorization': `Bearer ${SUPABASE_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("Raw data from Supabase:", data);
            const groupedMembers = data.reduce((acc, member) => {
                if (!member.organization_roles || !member.organization_roles.role_name) {
                    console.warn("Member missing role information:", member);
                    return acc;
                }
                
                const roleName = member.organization_roles.role_name;
                if (!acc[roleName]) {
                    acc[roleName] = [];
                }
                acc[roleName].push({
                    name: member.name,
                    affiliation: member.affiliation
                });
                return acc;
            }, {});
    
            return groupedMembers;
        } catch (err) {
            console.error('Error fetching organization members:', err);
            return null;
        }
    },

    getVenueInfo: async () => {
        try {
            const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/venue_info?select=*`, {
                headers: {
                    'apikey': SUPABASE_CONFIG.apiKey,
                    'Authorization': `Bearer ${SUPABASE_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            return data[0]; 
        } catch (err) {
            console.error('Error fetching venue info:', err);
            return null;
        }
    }
};

window.dbOperations = dbOperations;