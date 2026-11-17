import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin, Check, ExternalLink, Copy } from 'lucide-react';
import { headerContent } from '../../content';
import { smoothScrollTo } from '../../utils/scroll';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const scrollToTop = () => {
    smoothScrollTo(0, 750);
  };

  const handleCopyEmail = () => {
    if (headerContent.email) {
      navigator.clipboard.writeText(headerContent.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer className="w-full border-t border-card py-12 px-6 bg-secondary/50 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-card/60">
          {/* Brand & Contact Info */}
          <div className="space-y-3">
            <span className="font-ibm font-bold text-lg text-main">
              {headerContent.logoText}
            </span>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
              {headerContent.email && (
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1.5 hover:text-point transition-colors group"
                  title="클릭하여 이메일 복사"
                  aria-label="이메일 복사"
                >
                  <Mail className="w-3.5 h-3.5 text-point" />
                  <span className="font-mono">{headerContent.email}</span>
                  {copied ? (
                    <span className="inline-flex items-center space-x-0.5 text-point font-bold text-[11px]">
                      <Check className="w-3 h-3" />
                      <span>복사됨!</span>
                    </span>
                  ) : (
                    <Copy className="w-3 h-3 text-muted group-hover:text-point transition-colors" />
                  )}
                </button>
              )}
              {headerContent.phone && (
                <a
                  href={`tel:${headerContent.phone}`}
                  className="inline-flex items-center space-x-1.5 hover:text-point transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-point" />
                  <span>{headerContent.phone}</span>
                </a>
              )}
              {headerContent.location && (
                <span className="inline-flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-point" />
                  <span>{headerContent.location}</span>
                </span>
              )}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            {headerContent.githubUrl && (
              <a
                href={headerContent.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-card hover:border-point hover:text-point text-xs font-semibold text-main transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {headerContent.notionUrl && (
              <a
                href={headerContent.notionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-card hover:border-point hover:text-point text-xs font-semibold text-main transition-colors"
              >
                <span>Notion</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl glass-panel text-xs font-semibold hover:border-point hover:text-point transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-point" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-xs text-caption font-medium text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-main">{headerContent.logoText}</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
