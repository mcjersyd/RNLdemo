import { useSidebar } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";

const AppSidebar = () => {
    const { isOpen, toggleSidebar } = useSidebar();

    const sidebarItems = [
        {
            path: '#',
            text: 'Gender List'
        },
        {
            path: '#',
            text: 'User'

        },
    ];
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/20 sm:hidden"
                    onClick={toggleSidebar}
                />
            )}
            <aside
                id="top-bar-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } sm:translate-x-0 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
                    <ul className="space-y-2 font-medium">
                        {sidebarItems.map((sidebarItem, index) => (
                            <li key={index}>
                                <Link to={sidebarItem.path} className="flex items-center px-2 py-1.5 text-body rounded-base transition duration-150 ease-in-out hover:bg-neutral-tertiary hover:text-fg-brand hover:shadow-sm group">
                                    <svg className="w-5 h-5 transition duration-150 ease-in-out group-hover:text-fg-brand group-hover:scale-105" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                                    <span className="ms-3 transition duration-150 ease-in-out group-hover:text-fg-brand">{sidebarItem.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default AppSidebar