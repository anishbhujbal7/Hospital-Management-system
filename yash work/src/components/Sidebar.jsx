import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Inbox,
  Star,
  Send,
  FileEdit,
  Trash2,
  AlertCircle,
  X // Import the X icon for the close button
} from 'lucide-react';
import { cn } from '../lib/utils';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      path: '/',
      subItems: [
        { icon: Inbox, label: 'Audit log', path: '/audit_log' },
        { icon: Star, label: 'Assign role', path: '/assign_role' }
      ]
    },
    {
      icon: Building2,
      label: 'Hospital Collaboration',
      path: '/hospitals'
    },
    {
      icon: Inbox,
      label: 'Manage Requests',
      path: '/manage-requests',
      subItems: [
        { icon: Inbox, label: 'Inbox', path: '/manage-requests/inbox' },
        { icon: Star, label: 'Starred', path: '/manage-requests/starred' },
        { icon: Send, label: 'Sent', path: '/manage-requests/sent' },
        { icon: FileEdit, label: 'Drafts', path: '/manage-requests/drafts' },
        { icon: Trash2, label: 'Trash', path: '/manage-requests/trash' },
        { icon: AlertCircle, label: 'Important', path: '/manage-requests/important' }
      ]
    }
  ];

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" /> {/* Close button */}
        </button>
        <h2 className="text-2xl font-bold text-primary mb-8">MedConnect</h2>
        <nav>
          {menuItems.map((item, index) => (
            <div key={index} className="mb-4">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-2 rounded-lg text-gray-700 hover:bg-base",
                    isActive && "bg-base text-primary font-medium"
                  )
                }
                onClick={item.subItems ? undefined : onClose}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </NavLink>

              {item.subItems && (
                <div className="ml-6 mt-2 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subItem.path}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center p-2 rounded-lg text-gray-600 hover:bg-base text-sm",
                          isActive && "bg-base text-primary font-medium"
                        )
                      }
                      onClick={onClose}
                    >
                      <subItem.icon className="w-4 h-4 mr-3" />
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
