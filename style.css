<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multi-Client SEO Progress Dashboard</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- PapaParse for robust CSV parsing -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #f8fafc;
        }
        /* Custom scrollbars */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
    </style>
</head>
<body class="text-slate-800">

    <div id="root"></div>

    <!-- React and Babel for single file implementation -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
        const { useState, useEffect, useMemo, useRef } = React;

        // Default Client Data Pre-parsed from the Uploaded Files (e.g. SEO Progress Overview.xlsx)
        const INITIAL_CLIENTS_DATA = {
            "Blowbarlane": [
                { "Category": "Completed Fixes", "Task_Item": "Fixed multiple H1 tags", "Purpose": "Improves page structure and helps Google understand the page better", "Status": "Completed", "Notes": "Improved SEO readability" },
                { "Category": "Completed Fixes", "Task_Item": "Improved low-content pages", "Purpose": "Provides more useful information for visitors and search engines", "Status": "Completed", "Notes": "Added or optimized content" },
                { "Category": "Completed Fixes", "Task_Item": "Optimized long page titles", "Purpose": "Makes titles easier to read on Google search results", "Status": "Completed", "Notes": "Improved search visibility" },
                { "Category": "Completed Fixes", "Task_Item": "Compressed large image files", "Purpose": "Helps the website load faster", "Status": "Completed", "Notes": "Improved website speed" },
                { "Category": "Completed Fixes", "Task_Item": "Added missing image sizes", "Purpose": "Improves page loading and layout stability", "Status": "Completed", "Notes": "Better user experience" },
                { "Category": "Completed Fixes", "Task_Item": "Added missing image alt text", "Purpose": "Improves accessibility and helps images appear in search results", "Status": "Completed", "Notes": "SEO improvement" },
                { "Category": "Completed Fixes", "Task_Item": "Improved internal link text", "Purpose": "Makes website navigation clearer for users and Google", "Status": "Completed", "Notes": "User-friendly linking" },
                { "Category": "Completed Fixes", "Task_Item": "Fixed multiple H2 tags", "Purpose": "Improves content organization", "Status": "Completed", "Notes": "Better page structure" },
                { "Category": "Completed Fixes", "Task_Item": "Optimized long meta descriptions", "Purpose": "Improves how pages appear in Google results", "Status": "Completed", "Notes": "Better click-through potential" },
                { "Category": "Completed Fixes", "Task_Item": "Added missing meta descriptions", "Purpose": "Helps search engines display better summaries", "Status": "Completed", "Notes": "SEO enhancement" },
                { "Category": "Completed Fixes", "Task_Item": "Fixed internal links with missing anchor text", "Purpose": "Improves navigation and SEO clarity", "Status": "Completed", "Notes": "Better linking structure" },
                { "Category": "Completed Fixes", "Task_Item": "Shortened long H1 headings", "Purpose": "Makes headings search-friendly", "Status": "Completed", "Notes": "Clean structure achieved" },
                { "Category": "Ongoing Tasks", "Task_Item": "Fix unsafe cross-origin links", "Purpose": "Improves website trust and security", "Status": "In Progress", "Notes": "Security enhancement ongoing" },
                { "Category": "Ongoing Tasks", "Task_Item": "Optimize long H2 headings", "Purpose": "Improves readability and search engine understanding", "Status": "In Progress", "Notes": "Content optimization" },
                { "Category": "Requires Third-Party / Server Access", "Task_Item": "Fix internal redirections (3xx)", "Purpose": "Reduces unnecessary redirects and improves speed", "Status": "Pending", "Notes": "May require hosting or developer access" },
                { "Category": "Requires Third-Party / Server Access", "Task_Item": "Add missing X-Content-Type-Options header", "Purpose": "Adds an extra layer of website security", "Status": "Pending", "Notes": "Server-side configuration" },
                { "Category": "Content & Assets Needed", "Task_Item": "Google Business Profile content assets", "Purpose": "Keeps the business profile active and engaging", "Status": "Needed", "Notes": "Photos, offers, FAQs, and updates needed" },
                { "Category": "Content & Assets Needed", "Task_Item": "Social media content assets", "Purpose": "Supports consistent branding and online engagement", "Status": "Needed", "Notes": "Images, videos, captions, and branding materials needed" },
                { "Category": "Account Access", "Task_Item": "Google Analytics access", "Purpose": "Allows tracking of website traffic and performance", "Status": "Completed", "Notes": "Access already provided" },
                { "Category": "Account Access", "Task_Item": "Google Search Console access", "Purpose": "Helps monitor SEO performance and indexing", "Status": "Pending", "Notes": "Access still needed" },
                { "Category": "Account Access", "Task_Item": "Google Tag Manager access", "Purpose": "Allows setup of tracking and conversion tools", "Status": "Pending", "Notes": "Access still needed" },
                { "Category": "Account Access", "Task_Item": "Google Business Profile access", "Purpose": "Allows optimization of local search visibility", "Status": "Completed", "Notes": "Access already provided" }
            ],
            "Titan Freight": [
                { "Category": "Completed Fixes", "Task_Item": "All meta tags optimization completed", "Purpose": "Improves how pages appear on Google search results and increases click-through rate", "Status": "Completed", "Notes": "All page titles and meta descriptions have been optimized" },
                { "Category": "Ongoing Tasks", "Task_Item": "Security: Bad Content Type", "Purpose": "Improves overall website SEO performance", "Status": "In Progress", "Notes": "SEO improvement task" },
                { "Category": "Requires Third-Party / Server Access", "Task_Item": "Response Codes: Internal Redirection (3xx)", "Purpose": "Requires hosting or developer-level access to complete", "Status": "Pending", "Notes": "SEO improvement task" },
                { "Category": "Requires Third-Party / Server Access", "Task_Item": "Security: Missing X-Content-Type-Options Header", "Purpose": "Requires hosting or developer-level access to complete", "Status": "Pending", "Notes": "SEO improvement task" },
                { "Category": "Ongoing Tasks", "Task_Item": "Content: Readability Difficult", "Purpose": "Improves overall website SEO performance", "Status": "In Progress", "Notes": "SEO improvement task" },
                { "Category": "Completed Fixes", "Task_Item": "H2: Non-Sequential", "Purpose": "Improves content structure and SEO readability", "Status": "Completed", "Notes": "SEO improvement task" },
                { "Category": "Ongoing Tasks", "Task_Item": "Links: Internal Outlinks With No Anchor Text", "Purpose": "Improves overall website SEO performance", "Status": "In Progress", "Notes": "SEO improvement task" },
                { "Category": "Requires Third-Party / Server Access", "Task_Item": "Security: Missing Secure Referrer-Policy Header", "Purpose": "Requires hosting or developer-level access to complete", "Status": "Pending", "Notes": "SEO improvement task" },
                { "Category": "Requires Third-Party / Server Access", "Task_Item": "Security: Missing HSTS Header", "Purpose": "Requires hosting or developer-level access to complete", "Status": "Pending", "Notes": "SEO improvement task" },
                { "Category": "Completed Fixes", "Task_Item": "H2: Multiple", "Purpose": "Improves content structure and SEO readability", "Status": "Completed", "Notes": "SEO improvement task" },
                { "Category": "Completed Fixes", "Task_Item": "Images: Missing Size Attributes", "Purpose": "Improves website loading speed and user experience", "Status": "Completed", "Notes": "SEO improvement task" },
                { "Category": "Requires Third-Party / Server Access", "Task_Item": "Security: Missing X-Frame-Options Header", "Purpose": "Requires hosting or developer-level access to complete", "Status": "Pending", "Notes": "SEO improvement task" },
                { "Category": "Content & Assets Needed", "Task_Item": "Google Business Profile content assets", "Purpose": "Keeps the business profile active and engaging", "Status": "Needed", "Notes": "Photos, offers, FAQs, and updates needed" },
                { "Category": "Content & Assets Needed", "Task_Item": "Social media content assets", "Purpose": "Supports consistent branding and online engagement", "Status": "Needed", "Notes": "Images, videos, captions, and branding materials needed" },
                { "Category": "Account Access", "Task_Item": "Google Analytics access", "Purpose": "Allows tracking of website traffic and performance", "Status": "Completed", "Notes": "Access already provided" },
                { "Category": "Account Access", "Task_Item": "Google Search Console access", "Purpose": "Helps monitor SEO performance and indexing", "Status": "Pending", "Notes": "Access still needed" },
                { "Category": "Account Access", "Task_Item": "Google Tag Manager access", "Purpose": "Allows setup of tracking and conversion tools", "Status": "Pending", "Notes": "Access still needed" },
                { "Category": "Account Access", "Task_Item": "Google Business Profile access", "Purpose": "Allows optimization of local search visibility", "Status": "Completed", "Notes": "Access already provided" }
            ],
            "Christmas Galore": [
                { "Category": "SEO Tasks", "Task_Item": "All meta tags optimization completed", "Purpose": "Improves search visibility and click-through rate on Google", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Images: Missing Alt Text", "Purpose": "Improves accessibility and image SEO", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Page Titles: Over 60 Characters", "Purpose": "Improves website performance and SEO", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "H2: Non-Sequential", "Purpose": "Improves content structure and readability", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "Ongoing Tasks", "Task_Item": "Response Codes: Internal Blocked by Robots.txt", "Purpose": "Improves website performance and SEO", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Page Titles: Same as H1", "Purpose": "Improves content structure and readability", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Images: Missing Size Attributes", "Purpose": "Improves loading speed and user experience", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Meta Description: Below 400 Pixels", "Purpose": "Improves how pages appear on Google search results", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Page Titles: Over 561 Pixels", "Purpose": "Improves website performance and SEO", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Meta Description: Over 985 Pixels", "Purpose": "Improves how pages appear on Google search results", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "H1: Non-Sequential", "Purpose": "Improves content structure and readability", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "Requires Third-Party / Server Access", "Task_Item": "Response Codes: Internal Redirection (3xx)", "Purpose": "Requires hosting or developer access to complete", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "Ongoing Tasks", "Task_Item": "Links: Unsafe Resource Links", "Purpose": "Improves website performance and SEO", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Page Titles: Below 200 Pixels", "Purpose": "Improves website performance and SEO", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "Requires Third-Party / Server Access", "Task_Item": "Security: Missing HSTS Header", "Purpose": "Requires hosting or developer access to complete", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Meta Description: Over 155 Characters", "Purpose": "Improves how pages appear on Google search results", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "Ongoing Tasks", "Task_Item": "Security: Unsafe Cross-Origin Links", "Purpose": "Improves website performance and SEO", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "H2: Missing", "Purpose": "Improves content structure and readability", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "Content & Assets Needed", "Task_Item": "Google Business Profile content assets", "Purpose": "Keeps the business profile active and engaging", "Status": "Needed", "Notes": "Photos, offers, FAQs, and updates needed" },
                { "Category": "Content & Assets Needed", "Task_Item": "Social media content assets", "Purpose": "Supports consistent branding and online engagement", "Status": "Needed", "Notes": "Images, videos, captions, and branding materials needed" },
                { "Category": "Account Access", "Task_Item": "Google Analytics access", "Purpose": "Allows tracking of website traffic and performance", "Status": "Pending", "Notes": "Access already provided" },
                { "Category": "Account Access", "Task_Item": "Google Search Console access", "Purpose": "Helps monitor SEO performance and indexing", "Status": "Pending", "Notes": "Access still needed" },
                { "Category": "Account Access", "Task_Item": "Google Tag Manager access", "Purpose": "Allows setup of tracking and conversion tools", "Status": "Pending", "Notes": "Access still needed" },
                { "Category": "Account Access", "Task_Item": "Google Business Profile access", "Purpose": "Allows optimization of local search visibility", "Status": "Pending", "Notes": "Access already provided" }
            ],
            "Bubba Bump Baby": [
                { "Category": "SEO Tasks", "Task_Item": "Images: Missing Alt Text", "Purpose": "Improves accessibility and image SEO", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Canonicals: Non-Indexable Canonical", "Purpose": "Improves overall website SEO performance", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Page Titles: Over 60 Characters", "Purpose": "Makes pages easier to understand for users and search engines", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "H2: Non-Sequential", "Purpose": "Improves content structure and readability", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Response Codes: Internal Blocked by Robots.txt", "Purpose": "Improves overall website SEO performance", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Page Titles: Same as H1", "Purpose": "Makes pages easier to understand for users and search engines", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "URL: Repetitive Path", "Purpose": "Improves overall website SEO performance", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "H2: Duplicate", "Purpose": "Improves content structure and readability", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Images: Missing Size Attributes", "Purpose": "Improves website loading speed and user experience", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Page Titles: Over 561 Pixels", "Purpose": "Makes pages easier to understand for users and search engines", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Meta Description: Over 985 Pixels", "Purpose": "Improves visibility and appearance on Google search results", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "URL: Over 115 Characters", "Purpose": "Improves overall website SEO performance", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Pagination: Sequence Error", "Purpose": "Improves overall website SEO performance", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Page Titles: Below 200 Pixels", "Purpose": "Makes pages easier to understand for users and search engines", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Pagination: Pagination URL Not in Anchor Tag", "Purpose": "Improves overall website SEO performance", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Meta Description: Over 155 Characters", "Purpose": "Improves visibility and appearance on Google search results", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "Security: Unsafe Cross-Origin Links", "Purpose": "Improves overall website SEO performance", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "SEO Tasks", "Task_Item": "H1: Multiple", "Purpose": "Improves content structure and readability", "Status": "Pending", "Notes": "Awaiting implementation" },
                { "Category": "Content & Assets Needed", "Task_Item": "Google Business Profile content assets", "Purpose": "Keeps the business profile active and engaging", "Status": "Needed", "Notes": "Photos, offers, FAQs, and updates needed" },
                { "Category": "Content & Assets Needed", "Task_Item": "Social media content assets", "Purpose": "Supports consistent branding and online engagement", "Status": "Needed", "Notes": "Images, videos, captions, and branding materials needed" },
                { "Category": "Account Access", "Task_Item": "Google Analytics access", "Purpose": "Allows tracking of website traffic and performance", "Status": "Pending", "Notes": "Access already provided" },
                { "Category": "Account Access", "Task_Item": "Google Search Console access", "Purpose": "Helps monitor SEO performance and indexing", "Status": "Pending", "Notes": "Access still needed" },
                { "Category": "Account Access", "Task_Item": "Google Tag Manager access", "Purpose": "Allows setup of tracking and conversion tools", "Status": "Pending", "Notes": "Access still needed" },
                { "Category": "Account Access", "Task_Item": "Google Business Profile access", "Purpose": "Allows optimization of local search visibility", "Status": "Pending", "Notes": "Access already provided" }
            ]
        };

        function App() {
            const [allClients, setAllClients] = useState(INITIAL_CLIENTS_DATA);
            const [selectedClient, setSelectedClient] = useState("_OVERALL_"); // Default to global view
            const [statusFilter, setStatusFilter] = useState("All");
            const [searchQuery, setSearchQuery] = useState("");
            
            // Google Sheet sync configurations & Persistence
            const [sheetUrl, setSheetUrl] = useState(() => {
                return localStorage.getItem("seo_dashboard_sheet_url") || "";
            });
            const [isSyncing, setIsSyncing] = useState(false);
            const [syncError, setSyncError] = useState("");
            const [syncSuccess, setSyncSuccess] = useState(false);
            
            // Real-time automation configurations
            const [autoSyncEnabled, setAutoSyncEnabled] = useState(() => {
                return localStorage.getItem("seo_dashboard_auto_sync") === "true";
            });
            const [syncInterval, setSyncInterval] = useState(() => {
                return parseInt(localStorage.getItem("seo_dashboard_sync_interval")) || 60000; // default 1 min
            });
            const [lastSyncedTime, setLastSyncedTime] = useState(null);
            const [countdown, setCountdown] = useState(0);

            // Client edit/remove local states
            const [editingClientKey, setEditingClientKey] = useState(null);
            const [editingClientName, setEditingClientName] = useState("");
            const [confirmDeleteClientKey, setConfirmDeleteClientKey] = useState(null);

            // New Task Form
            const [newTask, setNewTask] = useState({ Category: "", Task_Item: "", Purpose: "", Status: "Pending", Notes: "" });
            const [newTaskTargetClient, setNewTaskTargetClient] = useState("");
            const [showNewTaskForm, setShowNewTaskForm] = useState(false);

            // New Client Form
            const [newClientName, setNewClientName] = useState("");
            const [showNewClientForm, setShowNewClientForm] = useState(false);

            // Toast feedback
            const [toast, setToast] = useState({ show: false, message: "", type: "success" });

            // Chart references
            const statusChartRef = useRef(null);
            const categoryChartRef = useRef(null);
            const statusChartInstance = useRef(null);
            const categoryChartInstance = useRef(null);

            const showToast = (message, type = "success") => {
                setToast({ show: true, message, type });
                setTimeout(() => setToast({ show: false, message: "", type: "success" }), 4000);
            };

            // Save settings to LocalStorage whenever they change
            useEffect(() => {
                localStorage.setItem("seo_dashboard_sheet_url", sheetUrl);
            }, [sheetUrl]);

            useEffect(() => {
                localStorage.setItem("seo_dashboard_auto_sync", autoSyncEnabled);
            }, [autoSyncEnabled]);

            useEffect(() => {
                localStorage.setItem("seo_dashboard_sync_interval", syncInterval);
            }, [syncInterval]);

            // Maps tasks dynamic pointer references so edits work in both Overall and Single view modes
            const displayTasksMeta = useMemo(() => {
                if (selectedClient === "_OVERALL_") {
                    const combined = [];
                    Object.keys(allClients).forEach(clientKey => {
                        allClients[clientKey].forEach((task, idx) => {
                            combined.push({
                                ...task,
                                _client: clientKey,
                                _originalIdx: idx
                            });
                        });
                    });
                    return combined;
                } else {
                    return (allClients[selectedClient] || []).map((task, idx) => ({
                        ...task,
                        _client: selectedClient,
                        _originalIdx: idx
                    }));
                }
            }, [allClients, selectedClient]);

            // Extract calculations for KPIs
            const kpiData = useMemo(() => {
                const total = displayTasksMeta.length;
                if (!total) return { completed: 0, progress: 0, pending: 0, needed: 0, percent: 0 };
                
                const completed = displayTasksMeta.filter(t => t.Status === "Completed").length;
                const progress = displayTasksMeta.filter(t => t.Status === "In Progress").length;
                const pending = displayTasksMeta.filter(t => t.Status === "Pending").length;
                const needed = displayTasksMeta.filter(t => t.Status === "Needed").length;
                const percent = Math.round((completed / total) * 100);

                return { total, completed, progress, pending, needed, percent };
            }, [displayTasksMeta]);

            // Filtered Tasks for displaying in Table
            const filteredTasks = useMemo(() => {
                return displayTasksMeta.filter(task => {
                    const matchStatus = statusFilter === "All" || task.Status === statusFilter;
                    
                    const query = searchQuery.toLowerCase().trim();
                    const matchSearch = !query || 
                        (task.Task_Item && task.Task_Item.toLowerCase().includes(query)) ||
                        (task.Purpose && task.Purpose.toLowerCase().includes(query)) ||
                        (task.Notes && task.Notes.toLowerCase().includes(query)) ||
                        (task._client && task._client.toLowerCase().includes(query)) ||
                        (task.Category && task.Category.toLowerCase().includes(query));

                    return matchStatus && matchSearch;
                });
            }, [displayTasksMeta, statusFilter, searchQuery]);

            // Fallback default target client for new tasks inside form
            useEffect(() => {
                if (selectedClient !== "_OVERALL_") {
                    setNewTaskTargetClient(selectedClient);
                } else {
                    const firstClient = Object.keys(allClients)[0] || "";
                    setNewTaskTargetClient(firstClient);
                }
            }, [selectedClient, allClients]);

            // Rename an active client folder
            const handleRenameClient = (oldName) => {
                const newName = editingClientName.trim();
                if (!newName) {
                    showToast("Client name cannot be empty", "error");
                    return;
                }
                if (newName === oldName) {
                    setEditingClientKey(null);
                    return;
                }
                if (allClients[newName]) {
                    showToast("A client with that name already exists", "error");
                    return;
                }

                setAllClients(prev => {
                    const next = { ...prev };
                    next[newName] = next[oldName];
                    delete next[oldName];
                    return next;
                });

                if (selectedClient === oldName) {
                    setSelectedClient(newName);
                }

                setEditingClientKey(null);
                showToast(`Client folder renamed to "${newName}"`, "success");
            };

            // Remove client folder entirely
            const handleRemoveClient = (name) => {
                setAllClients(prev => {
                    const next = { ...prev };
                    delete next[name];
                    
                    const remainingKeys = Object.keys(next);
                    if (selectedClient === name) {
                        if (remainingKeys.length > 0) {
                            setSelectedClient(remainingKeys[0]);
                        } else {
                            setSelectedClient("_OVERALL_");
                        }
                    }
                    return next;
                });

                setConfirmDeleteClientKey(null);
                showToast(`Removed client folder "${name}"`, "warning");
            };

            // Handle inline status editing with meta-aware client tracking
            const handleStatusChange = (client, originalIndex, newStatus) => {
                setAllClients(prev => {
                    const updatedTasks = [...(prev[client] || [])];
                    if (updatedTasks[originalIndex]) {
                        updatedTasks[originalIndex] = { ...updatedTasks[originalIndex], Status: newStatus };
                    }
                    return {
                        ...prev,
                        [client]: updatedTasks
                    };
                });
                showToast(`Updated status to "${newStatus}"`, "success");
            };

            // Handle inline text editing with meta-aware client tracking
            const handleTextChange = (client, originalIndex, field, value) => {
                setAllClients(prev => {
                    const updatedTasks = [...(prev[client] || [])];
                    if (updatedTasks[originalIndex]) {
                        updatedTasks[originalIndex] = { ...updatedTasks[originalIndex], [field]: value };
                    }
                    return {
                        ...prev,
                        [client]: updatedTasks
                    };
                });
            };

            // Add Custom Task
            const handleAddTask = (e) => {
                e.preventDefault();
                const target = newTaskTargetClient || selectedClient;
                if (target === "_OVERALL_") {
                    showToast("Please choose a target client folder", "error");
                    return;
                }
                if (!newTask.Category || !newTask.Task_Item) {
                    showToast("Category and Task Title are required", "error");
                    return;
                }
                setAllClients(prev => ({
                    ...prev,
                    [target]: [newTask, ...(prev[target] || [])]
                }));
                setNewTask({ Category: "", Task_Item: "", Purpose: "", Status: "Pending", Notes: "" });
                setShowNewTaskForm(false);
                showToast(`New task added to "${target}"!`, "success");
            };

            // Add Custom Client Tab
            const handleAddClient = (e) => {
                e.preventDefault();
                const name = newClientName.trim();
                if (!name) return;
                if (allClients[name]) {
                    showToast("Client with this name already exists!", "error");
                    return;
                }
                setAllClients(prev => ({
                    ...prev,
                    [name]: []
                }));
                setSelectedClient(name);
                setNewClientName("");
                setShowNewClientForm(false);
                showToast(`Client folder "${name}" created!`, "success");
            };

            // Remove a task
            const handleDeleteTask = (client, originalIndex) => {
                setAllClients(prev => {
                    const updatedTasks = (prev[client] || []).filter((_, i) => i !== originalIndex);
                    return {
                        ...prev,
                        [client]: updatedTasks
                    };
                });
                showToast("Task removed successfully", "warning");
            };

            // CSV Export function
            const exportToCSV = () => {
                const headers = ["Client", "Category", "Task / Item", "Purpose", "Status", "Notes"];
                
                let rows = [];
                if (selectedClient === "_OVERALL_") {
                    Object.keys(allClients).forEach(clientKey => {
                        allClients[clientKey].forEach(t => {
                            rows.push([clientKey, t.Category || "", t.Task_Item || "", t.Purpose || "", t.Status || "", t.Notes || ""]);
                        });
                    });
                } else {
                    displayTasksMeta.forEach(t => {
                        rows.push([selectedClient, t.Category || "", t.Task_Item || "", t.Purpose || "", t.Status || "", t.Notes || ""]);
                    });
                }
                
                const csvContent = "data:text/csv;charset=utf-8," 
                    + [headers.join(","), ...rows.map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(","))].join("\n");
                
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", `SEO_Portfolio_${selectedClient.replace(/\s+/g, '_')}.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                showToast("CSV file generated and downloaded!", "success");
            };

            // Local File upload CSV Parsing
            const handleFileUpload = (e) => {
                const file = e.target.files[0];
                if (!file) return;

                Papa.parse(file, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function(results) {
                        const parsedData = results.data;
                        if (parsedData.length === 0) {
                            showToast("Uploaded CSV is empty", "error");
                            return;
                        }

                        const cleanedData = parsedData.map(row => {
                            const keys = Object.keys(row);
                            const categoryKey = keys.find(k => k.toLowerCase().includes("category")) || "Category";
            // Dynamic Google Sheet CSV Syncing fetch API with automatic CORS proxy fallback
            const syncGoogleSheet = async (e) => {
                if (e) e.preventDefault();
                if (!sheetUrl) {
                    setSyncError("Please enter a valid URL first.");
                    return;
                }

                setIsSyncing(true);
                setSyncError("");
                setSyncSuccess(false);

                try {
                    let fetchUrl = sheetUrl.trim();
                    
                    // 1. Handle Web-published URLs (/d/e/2PACX...) safely without corrupting the link
                    if (fetchUrl.includes("/d/e/")) {
                        if (fetchUrl.includes("/pubhtml")) {
                            fetchUrl = fetchUrl.replace("/pubhtml", "/pub?output=csv");
                        } else if (fetchUrl.includes("/pub")) {
                            if (!fetchUrl.includes("output=csv")) {
                                fetchUrl = fetchUrl.includes("?") ? `${fetchUrl}&output=csv` : `${fetchUrl}?output=csv`;
                            }
                        }
                    } 
                    // 2. Handle standard edit URLs (/d/SPREADSHEET_ID/edit)
                    else if (fetchUrl.includes("docs.google.com/spreadsheets") && !fetchUrl.includes("output=csv")) {
                        const matches = fetchUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
                        if (matches && matches[1] && matches[1] !== "e") {
                            fetchUrl = `https://docs.google.com/spreadsheets/d/${matches[1]}/export?format=csv`;
                        }
                    }

                    // Append cache breaker to fetch fresh data
                    const cacheBreaker = `_nocache=${new Date().getTime()}`;
                    const targetUrl = fetchUrl + (fetchUrl.includes("?") ? "&" : "?") + cacheBreaker;

                    let csvText = "";
                    
                    try {
                        // Attempt Direct Fetch first
                        const response = await fetch(targetUrl);
                        if (!response.ok) throw new Error("Direct request failed");
                        csvText = await response.text();
                    } catch (directError) {
                        console.warn("Direct request blocked by CORS or network rules. Retrying with backup secure CORS proxy...", directError);
                        
                        // Fallback: Fetch via Secure CORS Proxy
                        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(fetchUrl)}`;
                        const response = await fetch(proxyUrl);
                        if (!response.ok) throw new Error("CORS Proxy request failed");
                        csvText = await response.text();
                    }
                    
                    Papa.parse(csvText, {
                        header: true,
                        skipEmptyLines: true,
                        complete: function(results) {
                            if (results.data && results.data.length > 0) {
                                const parsed = results.data.map(row => {
                                    const keys = Object.keys(row);
                                    const categoryKey = keys.find(k => k.toLowerCase().includes("category")) || "Category";
                                    const taskKey = keys.find(k => k.toLowerCase().includes("task") || k.toLowerCase().includes("item") || k.toLowerCase().includes("step")) || "Tasks";
                                    const purposeKey = keys.find(k => k.toLowerCase().includes("purpose") || k.toLowerCase().includes("impact")) || "Purpose";
                                    const statusKey = keys.find(k => k.toLowerCase().includes("status")) || "Status";
                                    const notesKey = keys.find(k => k.toLowerCase().includes("notes") || k.toLowerCase().includes("comment")) || "Notes";

                                    return {
                                        Category: row[categoryKey] || "Live Data",
                                        Task_Item: row[taskKey] || "Imported Task",
                                        Purpose: row[purposeKey] || "",
                                        Status: row[statusKey] || "Pending",
                                        Notes: row[notesKey] || ""
                                    };
                                });

                                const liveClientName = "Live Google Sheet Content";
                                setAllClients(prev => ({
                                    ...prev,
                                    [liveClientName]: parsed
                                }));
                                setSelectedClient(liveClientName);
                                setSyncSuccess(true);
                                setLastSyncedTime(new Date().toLocaleTimeString());
                                setCountdown(syncInterval / 1000);
                                showToast("Live workspace sync updated successfully!", "success");
                            } else {
                                throw new Error("No readable rows found in the parsed sheet.");
                            }
                        }
                    });

                } catch (error) {
                    console.error(error);
                    setSyncError("Error fetching live sheet. Make sure 'Anyone with the link' can view standard sheets, or use File > Share > Publish to Web.");
                } finally {
                    setIsSyncing(false);
                }
            };

            // Trigger sync on mount if URL is present (Persistence load)
            useEffect(() => {
                if (sheetUrl) {
                    syncGoogleSheet();
                }
            }, []);

            // Real-time automatic background sync hook
            useEffect(() => {
                let pollTimer = null;
                let countdownTimer = null;

                if (autoSyncEnabled && sheetUrl) {
                    setCountdown(syncInterval / 1000);

                    pollTimer = setInterval(() => {
                        syncGoogleSheet();
                    }, syncInterval);

                    countdownTimer = setInterval(() => {
                        setCountdown(prev => (prev > 1 ? prev - 1 : syncInterval / 1000));
                    }, 1000);
                }

                return () => {
                    if (pollTimer) clearInterval(pollTimer);
                    if (countdownTimer) clearInterval(countdownTimer);
                };
            }, [autoSyncEnabled, sheetUrl, syncInterval]);

            // Re-render chart instances whenever selected client or overall dataset changes
            useEffect(() => {
                if (!statusChartRef.current || !categoryChartRef.current) return;

                if (statusChartInstance.current) statusChartInstance.current.destroy();
                if (categoryChartInstance.current) categoryChartInstance.current.destroy();

                const counts = {
                    Completed: displayTasksMeta.filter(t => t.Status === "Completed").length,
                    "In Progress": displayTasksMeta.filter(t => t.Status === "In Progress").length,
                    Pending: displayTasksMeta.filter(t => t.Status === "Pending").length,
                    Needed: displayTasksMeta.filter(t => t.Status === "Needed").length
                };

                const ctxStatus = statusChartRef.current.getContext('2d');
                statusChartInstance.current = new Chart(ctxStatus, {
                    type: 'doughnut',
                    data: {
                        labels: ['Completed', 'In Progress', 'Pending', 'Needed'],
                        datasets: [{
                            data: [counts.Completed, counts["In Progress"], counts.Pending, counts.Needed],
                            backgroundColor: ['#10b981', '#3b82f6', '#cbd5e1', '#f59e0b'],
                            borderColor: '#ffffff',
                            borderWidth: 2,
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    boxWidth: 12,
                                    font: { family: 'Plus Jakarta Sans', size: 12 }
                                }
                            }
                        },
                        cutout: '70%'
                    }
                });

                const catGroup = {};
                displayTasksMeta.forEach(t => {
                    const cat = t.Category || "General";
                    if (!catGroup[cat]) catGroup[cat] = { total: 0, completed: 0 };
                    catGroup[cat].total++;
                    if (t.Status === "Completed") catGroup[cat].completed++;
                });

                const categoriesList = Object.keys(catGroup).slice(0, 10); // cap at top 10 categories
                const completeCounts = categoriesList.map(c => catGroup[c].completed);
                const remainingCounts = categoriesList.map(c => catGroup[c].total - catGroup[c].completed);

                const ctxCategory = categoryChartRef.current.getContext('2d');
                categoryChartInstance.current = new Chart(ctxCategory, {
                    type: 'bar',
                    data: {
                        labels: categoriesList,
                        datasets: [
                            {
                                label: 'Completed',
                                data: completeCounts,
                                backgroundColor: '#10b981',
                            },
                            {
                                label: 'Remaining',
                                data: remainingCounts,
                                backgroundColor: '#94a3b8',
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        indexAxis: 'y',
                        scales: {
                            x: { stacked: true, grid: { display: false } },
                            y: { stacked: true, grid: { display: false } }
                        },
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    boxWidth: 12,
                                    font: { family: 'Plus Jakarta Sans', size: 11 }
                                }
                            }
                        }
                    }
                });

            }, [displayTasksMeta]);

            const getClientBadgeStyle = (clientName) => {
                const colors = {
                    "Blowbarlane": "bg-indigo-50 text-indigo-700 border-indigo-100",
                    "Titan Freight": "bg-sky-50 text-sky-700 border-sky-100",
                    "Christmas Galore": "bg-emerald-50 text-emerald-700 border-emerald-100",
                    "Bubba Bump Baby": "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100",
                    "Live Google Sheet Content": "bg-teal-50 text-teal-700 border-teal-100"
                };
                return colors[clientName] || "bg-slate-50 text-slate-700 border-slate-100";
            };

            return (
                <div class="min-h-screen bg-slate-50 flex flex-col pb-16">
                    {}
                    <header class="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold shadow-md shadow-indigo-200">
                                    SEO
                                </div>
                                <div>
                                    <h1 class="text-xl font-bold text-slate-950 tracking-tight">SEO Audit Workspace</h1>
                                    <p class="text-xs text-slate-500 font-semibold flex items-center gap-1">
                                        <span>Dynamic Portfolio Workspace</span>
                                        {autoSyncEnabled && (
                                            <span class="flex h-2 w-2 relative">
                                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-center space-x-3">
                                <label class="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    <span>Upload CSV</span>
                                    <input type="file" accept=".csv" class="hidden" onChange={handleFileUpload} />
                                </label>

                                <button onClick={exportToCSV} class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm transition-all duration-200 flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Export Sheet</span>
                                </button>
                            </div>
                        </div>
                    </header>

                    <main class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        <section class="lg:col-span-4 flex flex-col space-y-6">
                            
                            {/* Overall Summary View Button */}
                            <button 
                                onClick={() => setSelectedClient("_OVERALL_")}
                                className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                                    selectedClient === "_OVERALL_"
                                        ? "bg-gradient-to-r from-slate-900 to-indigo-950 border-slate-900 text-white shadow-lg shadow-indigo-950/20"
                                        : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:shadow-sm"
                                }`}
                            >
                                <div class="flex items-center space-x-3.5">
                                    <div class={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${selectedClient === "_OVERALL_" ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-900'}`}>
                                        📊
                                    </div>
                                    <div>
                                        <p class="font-extrabold text-sm tracking-wide">All Clients Portfolio</p>
                                        <p class={`text-[11px] mt-0.5 font-medium ${selectedClient === "_OVERALL_" ? 'text-indigo-200' : 'text-slate-500'}`}>
                                            Aggregated Overall Overview
                                        </p>
                                    </div>
                                </div>
                                <span class="text-xs font-black px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-400">
                                    Overall
                                </span>
                            </button>

                            {}
                            {/* Client Tabs Selection */}
                            <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="text-xs font-bold text-slate-400 tracking-wide uppercase">Folders & Directory</h3>
                                    <button onClick={() => setShowNewClientForm(true)} class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1">
                                        <span>+ Add Folder</span>
                                    </button>
                                </div>

                                {showNewClientForm && (
                                    <form onSubmit={handleAddClient} class="mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
                                        <label class="block text-xs font-semibold text-slate-600 mb-1">Folder Name</label>
                                        <div class="flex space-x-2">
                                            <input 
                                                type="text" 
                                                value={newClientName} 
                                                onChange={(e) => setNewClientName(e.target.value)}
                                                placeholder="e.g. My Website" 
                                                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                required
                                            />
                                            <button type="submit" class="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">Create</button>
                                            <button type="button" onClick={() => setShowNewClientForm(false)} class="text-slate-400 text-xs px-2">Cancel</button>
                                        </div>
                                    </form>
                                )}

                                <div class="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                                    {Object.keys(allClients).map(clientName => {
                                        const isActive = selectedClient === clientName;
                                        const clientCount = allClients[clientName]?.length || 0;
                                        const doneCount = allClients[clientName]?.filter(t => t.Status === "Completed").length || 0;
                                        const pct = clientCount ? Math.round((doneCount / clientCount) * 100) : 0;
                                        const isEditing = editingClientKey === clientName;
                                        const isConfirmingDelete = confirmDeleteClientKey === clientName;

                                        return (
                                            <div key={clientName} className="group relative">
                                                {isEditing ? (
                                                    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 flex flex-col space-y-2">
                                                        <input 
                                                            type="text"
                                                            value={editingClientName}
                                                            onChange={(e) => setEditingClientName(e.target.value)}
                                                            className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-bold"
                                                            autoFocus
                                                        />
                                                        <div class="flex justify-end space-x-1.5">
                                                            <button 
                                                                onClick={() => handleRenameClient(clientName)} 
                                                                class="bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md"
                                                            >
                                                                Save
                                                            </button>
                                                            <button 
                                                                onClick={() => setEditingClientKey(null)} 
                                                                class="bg-slate-200 hover:bg-slate-300 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md"
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : isConfirmingDelete ? (
                                                    <div class="bg-rose-50 border border-rose-200 p-3 rounded-xl flex flex-col space-y-1.5">
                                                        <p class="text-[11px] font-bold text-rose-800">Delete "{clientName}" folder?</p>
                                                        <div class="flex justify-end space-x-1.5">
                                                            <button 
                                                                onClick={() => handleRemoveClient(clientName)} 
                                                                class="bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-md"
                                                            >
                                                                Yes, Delete
                                                            </button>
                                                            <button 
                                                                onClick={() => setConfirmDeleteClientKey(null)} 
                                                                class="bg-slate-200 hover:bg-slate-300 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md"
                                                            >
                                                                No
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className={`w-full rounded-xl border transition-all duration-200 flex items-center justify-between pl-4 pr-2 py-3 ${
                                                        isActive 
                                                            ? "bg-slate-950 border-slate-950 text-white shadow-md shadow-slate-900/10" 
                                                            : "bg-white border-slate-200 hover:border-slate-300 text-slate-700"
                                                    }`}>
                                                        <button 
                                                            onClick={() => setSelectedClient(clientName)}
                                                            className="text-left flex-1 truncate mr-2"
                                                        >
                                                            <p class="font-bold text-sm truncate">{clientName}</p>
                                                            <p class={`text-[11px] mt-0.5 ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>{clientCount} total audit steps</p>
                                                        </button>
                                                        
                                                        <div class="flex items-center space-x-1">
                                                            <span class={`text-[10px] font-bold px-2 py-0.5 rounded-full mr-1 ${isActive ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                                                {pct}% Done
                                                            </span>

                                                            <button 
                                                                onClick={() => {
                                                                    setEditingClientKey(clientName);
                                                                    setEditingClientName(clientName);
                                                                }}
                                                                className={`p-1.5 rounded-lg transition duration-150 ${isActive ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'}`}
                                                                title="Rename Client"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                                </svg>
                                                            </button>

                                                            <button 
                                                                onClick={() => setConfirmDeleteClientKey(clientName)}
                                                                className={`p-1.5 rounded-lg transition duration-150 ${isActive ? 'text-slate-400 hover:text-rose-400 hover:bg-slate-800' : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100'}`}
                                                                title="Delete Client"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {}
                            {/* Google Sheet Direct Synchronization Panel */}
                            <div class="bg-indigo-950 text-white rounded-2xl p-5 shadow-xl shadow-indigo-950/15 border border-indigo-900">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="flex items-center space-x-2.5">
                                        <div class="w-6 h-6 bg-emerald-500 rounded-md flex items-center justify-center">
                                            <span class="text-xs font-black text-indigo-950">田</span>
                                        </div>
                                        <h3 class="text-sm font-bold tracking-wide uppercase">Real-Time Sheets</h3>
                                    </div>
                                    {lastSyncedTime && (
                                        <span class="text-[10px] bg-indigo-900 text-indigo-200 px-2 py-0.5 rounded-full font-semibold">
                                            Last synced: {lastSyncedTime}
                                        </span>
                                    )}
                                </div>
                                <p class="text-xs text-indigo-200 leading-relaxed mb-4">
                                    Paste your Google Sheets link. Changes will automatically sync with your dashboard.
                                </p>

                                <form onSubmit={syncGoogleSheet} class="space-y-3">
                                    <div>
                                        <input 
                                            type="url" 
                                            value={sheetUrl}
                                            onChange={(e) => setSheetUrl(e.target.value)}
                                            placeholder="Paste share link or published CSV link here..."
                                            className="w-full text-xs bg-indigo-900/50 border border-indigo-700/60 rounded-xl px-3 py-2.5 text-white placeholder-indigo-300 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                                        />
                                    </div>

                                    {/* Auto Refresh Toggles */}
                                    <div class="bg-indigo-900/40 p-3 rounded-xl border border-indigo-800 space-y-2">
                                        <div class="flex items-center justify-between">
                                            <label class="text-xs font-semibold text-indigo-200 cursor-pointer flex items-center space-x-2">
                                                <input 
                                                    type="checkbox" 
                                                    checked={autoSyncEnabled} 
                                                    onChange={(e) => setAutoSyncEnabled(e.target.checked)}
                                                    className="rounded border-indigo-700 bg-indigo-950 text-emerald-500 focus:ring-0 focus:ring-offset-0 h-3.5 w-3.5"
                                                />
                                                <span>Enable Real-Time Auto-Sync</span>
                                            </label>
                                        </div>
                                        {autoSyncEnabled && (
                                            <div class="flex items-center justify-between pt-1 border-t border-indigo-800/60 text-[10px]">
                                                <span class="text-slate-300">Sync Interval:</span>
                                                <select 
                                                    value={syncInterval} 
                                                    onChange={(e) => setSyncInterval(parseInt(e.target.value))}
                                                    class="bg-indigo-950 text-indigo-200 border border-indigo-800 rounded px-1.5 py-0.5 text-[10px] focus:outline-none"
                                                >
                                                    <option value="15000">15 Seconds</option>
                                                    <option value="30000">30 Seconds</option>
                                                    <option value="60000">1 Minute</option>
                                                    <option value="300000">5 Minutes</option>
                                                </select>
                                            </div>
                                        )}
                                        {autoSyncEnabled && countdown > 0 && (
                                            <p class="text-[9px] text-emerald-400 font-semibold tracking-wide flex items-center space-x-1 pt-1 animate-pulse">
                                                <span>● Live sync happening in {countdown}s...</span>
                                            </p>
                                        )}
                                    </div>
                                    
                                    {syncError && (
                                        <p class="text-[11px] text-rose-300 font-medium">{syncError}</p>
                                    )}

                                    {syncSuccess && (
                                        <div class="text-[11px] text-emerald-400 font-semibold space-y-1">
                                            <p>✓ Connected & Saving progress instantly</p>
                                        </div>
                                    )}

                                    <button 
                                        type="submit" 
                                        disabled={isSyncing}
                                        className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center space-x-2 ${
                                            isSyncing ? 'bg-indigo-800 text-indigo-400 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-400 text-indigo-950 font-black shadow-md shadow-emerald-500/10'
                                        }`}
                                    >
                                        {isSyncing ? (
                                            <span>Syncing Sheets...</span>
                                        ) : (
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15" />
                                                </svg>
                                                <span>Force Refresh Now</span>
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Step-by-Step Connection Guide */}
                                <div class="mt-4 pt-4 border-t border-indigo-900 text-[10px] text-indigo-200 space-y-1.5 bg-indigo-950/40 p-2.5 rounded-lg">
                                    <span class="font-bold text-emerald-400 uppercase tracking-wider block">How to configure your live sheet:</span>
                                    <ol class="list-decimal pl-3 space-y-1 text-slate-300">
                                        <li>In Google Sheets, go to <strong class="text-white">File &gt; Share &gt; Publish to web</strong>.</li>
                                        <li>Choose <strong class="text-white">Entire Document</strong> (or a specific client tab) and select <strong class="text-white">Comma-separated values (.csv)</strong>.</li>
                                        <li>Click <strong class="text-white">Publish</strong>, copy the generated link, and paste it above!</li>
                                    </ol>
                                </div>
                            </div>

                            {/* Status Allocation Doughnut Chart */}
                            <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
                                <h3 class="text-sm font-bold text-slate-900 mb-4 tracking-wide uppercase">Audit Status Allocation</h3>
                                <div class="relative h-48 w-full">
                                    <canvas ref={statusChartRef}></canvas>
                                </div>
                            </div>

                            {/* Category-by-Category Audit Performance Chart */}
                            <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
                                <h3 class="text-sm font-bold text-slate-900 mb-4 tracking-wide uppercase">Category Completion Progress</h3>
                                <div class="relative h-56 w-full">
                                    <canvas ref={categoryChartRef}></canvas>
                                </div>
                            </div>

                        </section>

                        <section class="lg:col-span-8 flex flex-col space-y-6">
                            
                            {/* Performance KPI Grid */}
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                
                                <div class="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                                    <p class="text-xs font-semibold text-slate-400 tracking-wide uppercase">Completion Rate</p>
                                    <div class="flex items-baseline space-x-2 mt-2">
                                        <span class="text-2xl font-black text-emerald-600">{kpiData.percent}%</span>
                                    </div>
                                    <div class="w-full bg-slate-100 h-1.5 rounded-full mt-2.5 overflow-hidden">
                                        <div class="bg-emerald-500 h-full rounded-full" style={{ width: `${kpiData.percent}%` }}></div>
                                    </div>
                                </div>

                                <div class="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                                    <p class="text-xs font-semibold text-slate-400 tracking-wide uppercase">Total Actions</p>
                                    <div class="flex items-baseline space-x-2 mt-2">
                                        <span class="text-2xl font-black text-slate-900">{kpiData.total}</span>
                                        <span class="text-xs text-slate-400 font-semibold">audit items</span>
                                    </div>
                                    <p class="text-[10px] text-slate-500 mt-2.5 font-medium">Mapped to context selection</p>
                                </div>

                                <div class="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                                    <p class="text-xs font-semibold text-slate-400 tracking-wide uppercase">Active Fixes</p>
                                    <div class="flex items-baseline space-x-2 mt-2">
                                        <span class="text-2xl font-black text-indigo-600">{kpiData.progress}</span>
                                        <span class="text-xs text-slate-400 font-semibold">working</span>
                                    </div>
                                    <p class="text-[10px] text-slate-500 mt-2.5 font-medium">Currently in progress</p>
                                </div>

                                <div class="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                                    <p class="text-xs font-semibold text-slate-400 tracking-wide uppercase">Awaiting Client Assets</p>
                                    <div class="flex items-baseline space-x-2 mt-2">
                                        <span class="text-2xl font-black text-amber-500">{kpiData.needed}</span>
                                        <span class="text-xs text-slate-400 font-semibold">needed</span>
                                    </div>
                                    <p class="text-[10px] text-slate-500 mt-2.5 font-medium">Require assets or access</p>
                                </div>

                            </div>

                            {}
                            {/* Work Area: Task Search, Add tasks, Custom table */}
                            <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col overflow-hidden">
                                
                                {/* Filters Block */}
                                <div class="p-5 border-b border-slate-200 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    
                                    {/* Search Bar */}
                                    <div class="relative flex-1">
                                        <svg class="absolute left-3.5 top-3 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <input 
                                            type="text" 
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search tasks, purpose, folders, or comments..."
                                            className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-slate-700"
                                        />
                                    </div>

                                    {/* Select Dropdowns */}
                                    <div class="flex items-center space-x-3">
                                        
                                        {/* Status Filter */}
                                        <div class="flex flex-col">
                                            <select 
                                                value={statusFilter}
                                                onChange={(e) => setStatusFilter(e.target.value)}
                                                className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
                                            >
                                                <option value="All">All Statuses</option>
                                                <option value="Completed">Completed</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Needed">Needed</option>
                                            </select>
                                        </div>

                                        {/* Add Task Trigger */}
                                        <button 
                                            onClick={() => setShowNewTaskForm(!showNewTaskForm)}
                                            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl transition-all flex items-center space-x-1.5"
                                        >
                                            <span>{showNewTaskForm ? "Close Form" : "Add Task"}</span>
                                        </button>
                                    </div>

                                </div>

                                {/* Add New Task form dropdown overlay */}
                                {showNewTaskForm && (
                                    <form onSubmit={handleAddTask} class="p-5 border-b border-slate-200 bg-indigo-50/40 grid grid-cols-1 md:grid-cols-12 gap-4">
                                        
                                        {selectedClient === "_OVERALL_" && (
                                            <div class="md:col-span-3">
                                                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Target Client Folder</label>
                                                <select 
                                                    value={newTaskTargetClient}
                                                    onChange={(e) => setNewTaskTargetClient(e.target.value)}
                                                    className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-bold"
                                                    required
                                                >
                                                    <option value="" disabled>Choose target client...</option>
                                                    {Object.keys(allClients).map(clientKey => (
                                                        <option key={clientKey} value={clientKey}>{clientKey}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}

                                        <div class={selectedClient === "_OVERALL_" ? "md:col-span-3" : "md:col-span-3"}>
                                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Category</label>
                                            <input 
                                                type="text"
                                                required
                                                value={newTask.Category}
                                                onChange={(e) => setNewTask({...newTask, Category: e.target.value})}
                                                placeholder="e.g. Completed Fixes"
                                                className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div class="md:col-span-3">
                                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Task / Item</label>
                                            <input 
                                                type="text"
                                                required
                                                value={newTask.Task_Item}
                                                onChange={(e) => setNewTask({...newTask, Task_Item: e.target.value})}
                                                placeholder="e.g. Optimize H1 headers"
                                                className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div class="md:col-span-3">
                                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Purpose / Impact</label>
                                            <input 
                                                type="text"
                                                value={newTask.Purpose}
                                                onChange={(e) => setNewTask({...newTask, Purpose: e.target.value})}
                                                placeholder="e.g. Improves search indexing"
                                                className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div class="md:col-span-2">
                                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Status</label>
                                            <select 
                                                value={newTask.Status}
                                                onChange={(e) => setNewTask({...newTask, Status: e.target.value})}
                                                className="w-full text-xs bg-white border border-slate-200 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                            >
                                                <option value="Completed">Completed</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Needed">Needed</option>
                                            </select>
                                        </div>
                                        <div class="md:col-span-12 flex justify-end space-x-2 mt-1">
                                            <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-lg">
                                                Add Task to Portfolio
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {}
                                {/* Audit Tasks Table */}
                                <div class="overflow-x-auto">
                                    <table class="w-full text-left border-collapse">
                                        <thead>
                                            <tr class="bg-slate-50 border-b border-slate-200 text-slate-400 font-bold text-[10px] tracking-wider uppercase">
                                                {selectedClient === "_OVERALL_" && <th class="py-4 px-6 w-36">Client Origin</th>}
                                                <th class="py-4 px-6 w-1/4">Tasks</th>
                                                <th class="py-4 px-4 w-1/3">Core Purpose</th>
                                                <th class="py-4 px-4 w-40">Status Check</th>
                                                <th class="py-4 px-4">Workspace Notes / Comments</th>
                                                <th class="py-4 px-4 text-center w-16">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-slate-100 text-sm">
                                            {filteredTasks.length === 0 ? (
                                                <tr>
                                                    <td colSpan={selectedClient === "_OVERALL_" ? "6" : "5"} class="py-12 text-center text-slate-400 font-medium bg-slate-50/10">
                                                        No matching tasks found. Adjust filters or search keywords.
                                                    </td>
                                                </tr>
                                            ) : (
                                                filteredTasks.map((task) => {
                                                    let badgeStyle = "bg-slate-100 text-slate-600";
                                                    if (task.Status === "Completed") badgeStyle = "bg-emerald-50 text-emerald-700 border-emerald-200";
                                                    else if (task.Status === "In Progress") badgeStyle = "bg-blue-50 text-blue-700 border-blue-200";
                                                    else if (task.Status === "Pending") badgeStyle = "bg-slate-100 text-slate-500 border-slate-200";
                                                    else if (task.Status === "Needed") badgeStyle = "bg-amber-50 text-amber-700 border-amber-200";

                                                    return (
                                                        <tr key={`${task._client}-${task._originalIdx}`} class="hover:bg-slate-50/50 transition duration-150">
                                                            
                                                            {selectedClient === "_OVERALL_" && (
                                                                <td class="py-4.5 px-6 font-bold text-xs">
                                                                    <span class={`px-2.5 py-1 rounded-lg border font-semibold inline-block truncate max-w-[130px] ${getClientBadgeStyle(task._client)}`}>
                                                                        {task._client}
                                                                    </span>
                                                                </td>
                                                            )}

                                                            <td class="py-4.5 px-6">
                                                                <span class="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-0.5">
                                                                    {task.Category || "General Audit"}
                                                                </span>
                                                                <input 
                                                                    type="text" 
                                                                    value={task.Task_Item || ""}
                                                                    onChange={(e) => handleTextChange(task._client, task._originalIdx, "Task_Item", e.target.value)}
                                                                    className="font-bold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-200 focus:border-indigo-500 focus:outline-none w-full py-0.5 font-medium"
                                                                />
                                                            </td>

                                                            <td class="py-4.5 px-4 text-slate-500">
                                                                <textarea 
                                                                    rows="2"
                                                                    value={task.Purpose || ""}
                                                                    onChange={(e) => handleTextChange(task._client, task._originalIdx, "Purpose", e.target.value)}
                                                                    className="text-xs bg-transparent border border-transparent hover:border-slate-200 focus:border-indigo-500 focus:outline-none w-full p-1 rounded resize-none"
                                                                />
                                                            </td>

                                                            <td class="py-4.5 px-4">
                                                                <div class="relative inline-block w-full">
                                                                    <select 
                                                                        value={task.Status || "Pending"}
                                                                        onChange={(e) => handleStatusChange(task._client, task._originalIdx, e.target.value)}
                                                                        className={`text-xs font-bold px-3 py-1.5 rounded-full border focus:outline-none focus:ring-1 focus:ring-indigo-400 cursor-pointer appearance-none pr-8 w-full ${badgeStyle}`}
                                                                    >
                                                                        <option value="Completed">Completed</option>
                                                                        <option value="In Progress">In Progress</option>
                                                                        <option value="Pending">Pending</option>
                                                                        <option value="Needed">Needed</option>
                                                                    </select>
                                                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                                                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                                    </div>
                                                                </div>
                                                            </td>

                                                            <td class="py-4.5 px-4">
                                                                <textarea 
                                                                    rows="2"
                                                                    value={task.Notes || ""}
                                                                    onChange={(e) => handleTextChange(task._client, task._originalIdx, "Notes", e.target.value)}
                                                                    className="text-xs text-slate-600 bg-transparent border border-transparent hover:border-slate-200 focus:border-indigo-500 focus:outline-none w-full p-1 rounded resize-none"
                                                                    placeholder="Add tracking notes..."
                                                                />
                                                            </td>

                                                            <td class="py-4.5 px-4 text-center">
                                                                <button 
                                                                    onClick={() => handleDeleteTask(task._client, task._originalIdx)}
                                                                    class="text-slate-300 hover:text-rose-500 transition duration-150"
                                                                    title="Delete Task"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </button>
                                                            </td>

                                                        </tr>
                                                    );
                                                })
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <p class="text-[11px] text-slate-500 font-medium">
                                        Showing <span class="font-bold">{filteredTasks.length}</span> out of <span class="font-bold">{displayTasksMeta.length}</span> total actions in scope. Cells are editable inline.
                                    </p>
                                    <div class="flex items-center space-x-2 text-[11px] text-indigo-600 font-bold">
                                        <span>💡 Tip: In Overall view, updates automatically sync back to original folders.</span>
                                    </div>
                                </div>

                            </div>

                        </section>

                    </main>

                    {/* Pop-up Toast Notifications */}
                    {toast.show && (
                        <div class="fixed bottom-5 right-5 bg-slate-900 border border-slate-800 text-white rounded-xl shadow-2xl p-4 flex items-center space-x-3 max-w-sm z-50 animate-bounce">
                            <div class={`w-2.5 h-2.5 rounded-full ${
                                toast.type === 'success' ? 'bg-emerald-400' : toast.type === 'warning' ? 'bg-amber-400' : 'bg-rose-400'
                            }`}></div>
                            <span class="text-xs font-bold leading-relaxed">{toast.message}</span>
                        </div>
                    )}
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>