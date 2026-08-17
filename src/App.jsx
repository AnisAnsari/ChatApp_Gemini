import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import GeminiChat from "./GeminiChat";

function AdminBuilder() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className={`admin-shell ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="brand-mark">DC</div>
          <div>
            <div className="brand-title">DashCraft</div>
            <div className="brand-subtitle">Admin Studio</div>
          </div>
        </div>

        <div className="sidebar-section-title">Create Admin</div>
        <nav className="sidebar-nav">
          <button className="sidebar-item is-active">Header Logo</button>
          <button className="sidebar-item">Color Theme</button>
          <button className="sidebar-item">Div Placement</button>
          <button className="sidebar-item">Button Style</button>
          <button className="sidebar-item">Typography</button>
          <button className="sidebar-item">Spacing</button>
          <button className="sidebar-item">Border Radius</button>
          <button className="sidebar-item">Shadows</button>
          <button className="sidebar-item">Layout Grid</button>
        </nav>

        <div className="sidebar-footer">
          <div className="footer-label">Template</div>
          <button className="pill-button">Save Draft</button>
          <button className="pill-button ghost">Publish</button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "Close" : "Open"} Menu
            </button>
            <div className="header-title">
              Model Page Builder
              <span className="header-subtitle">
                Design the admin experience in real time
              </span>
            </div>
          </div>
          <div className="header-right">
            <input
              className="header-search"
              placeholder="Search components..."
              type="search"
            />
            <button className="icon-button">Alerts</button>
            <div className="profile-chip">
              <span className="avatar">AI</span>
              <span>Admin</span>
            </div>
          </div>
        </header>

        <section className="admin-content">
          <div className="content-left">
            <div className="panel-card">
              <div className="panel-title">Header Logo</div>
              <div className="panel-subtitle">
                Upload or choose a logo style for the top bar.
              </div>
              <div className="logo-options">
                <button className="logo-chip is-selected">Monogram</button>
                <button className="logo-chip">Wordmark</button>
                <button className="logo-chip">Icon + Text</button>
              </div>
              <div className="upload-area">
                <div className="upload-icon">+</div>
                <div>
                  <div className="upload-title">Drop your logo here</div>
                  <div className="upload-subtitle">SVG, PNG up to 2MB</div>
                </div>
                <button className="pill-button">Upload</button>
              </div>
            </div>

            <div className="panel-card">
              <div className="panel-title">Color Theme</div>
              <div className="theme-grid">
                <button className="theme-swatch theme-indigo" />
                <button className="theme-swatch theme-mint" />
                <button className="theme-swatch theme-coral" />
                <button className="theme-swatch theme-amber" />
                <button className="theme-swatch theme-charcoal" />
              </div>
              <div className="panel-actions">
                <button className="pill-button">Apply Theme</button>
                <button className="pill-button ghost">Customize</button>
              </div>
            </div>

            <div className="panel-card">
              <div className="panel-title">Button Style</div>
              <div className="button-preview-row">
                <button className="primary-preview">Primary</button>
                <button className="secondary-preview">Secondary</button>
                <button className="ghost-preview">Ghost</button>
              </div>
              <div className="slider-row">
                <label>Radius</label>
                <div className="slider-track">
                  <span className="slider-fill" />
                </div>
                <span className="slider-value">12px</span>
              </div>
              <div className="slider-row">
                <label>Shadow</label>
                <div className="slider-track">
                  <span className="slider-fill soft" />
                </div>
                <span className="slider-value">Soft</span>
              </div>
            </div>
          </div>

          <div className="content-right">
            <div className="preview-card">
              <div className="preview-header">
                <div className="preview-title">Admin Plane Preview</div>
                <div className="status-chip">Live</div>
              </div>
              <div className="preview-metrics">
                <div className="metric-card">
                  <div className="metric-label">Active Users</div>
                  <div className="metric-value">2,482</div>
                  <div className="metric-trend up">+12.4%</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Revenue</div>
                  <div className="metric-value">$86,420</div>
                  <div className="metric-trend up">+5.1%</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Tickets</div>
                  <div className="metric-value">182</div>
                  <div className="metric-trend down">-3.7%</div>
                </div>
              </div>
              <div className="preview-table">
                <div className="table-header">
                  <span>Recent Activity</span>
                  <button className="ghost-preview small">View All</button>
                </div>
                <div className="table-row">
                  <span>Layout grid updated</span>
                  <span className="tag success">Completed</span>
                </div>
                <div className="table-row">
                  <span>New admin invited</span>
                  <span className="tag pending">Pending</span>
                </div>
                <div className="table-row">
                  <span>Theme sync deployed</span>
                  <span className="tag success">Completed</span>
                </div>
              </div>
              <div className="quick-actions">
                <button className="primary-preview">Create Admin</button>
                <button className="secondary-preview">Duplicate</button>
                <button className="ghost-preview">Export</button>
              </div>
            </div>

            <div className="panel-card compact">
              <div className="panel-title">Div Placement</div>
              <div className="placement-grid">
                <div className="placement-cell is-active" />
                <div className="placement-cell" />
                <div className="placement-cell" />
                <div className="placement-cell" />
                <div className="placement-cell" />
                <div className="placement-cell is-highlight" />
              </div>
              <div className="panel-subtitle">
                Drag to rearrange or pick a layout preset.
              </div>
              <button className="pill-button">Edit Layout</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminBuilder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<GeminiChat />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
