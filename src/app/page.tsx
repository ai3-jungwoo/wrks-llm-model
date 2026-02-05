"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Header from "@/components/features/Header";
import ModelCard from "@/components/features/ModelCard";
import { aiModels, featuredModelIds } from "@/lib/data";

export default function Home() {
  const [selectedProvider, setSelectedProvider] = useState("웍스 대표 모델");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredModels = useMemo(() => {
    // 검색어가 있으면 전체 모델에서 검색
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return aiModels.filter(
        (model) =>
          model.name.toLowerCase().includes(query) ||
          model.description.toLowerCase().includes(query) ||
          model.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // 검색어가 없으면 Provider 필터링
    if (selectedProvider === "웍스 대표 모델") {
      return aiModels.filter((model) => featuredModelIds.includes(model.id));
    }
    if (selectedProvider === "All") {
      return aiModels;
    }
    return aiModels.filter((model) => model.provider === selectedProvider);
  }, [selectedProvider, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        selectedProvider={selectedProvider}
        onSelectProvider={setSelectedProvider}
      />

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="모델명, 설명, 태그로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Models Section */}
      <main className="py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Model Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              총 <span className="font-semibold text-gray-900">{filteredModels.length}</span>개 모델
              {searchQuery && (
                <span className="ml-2 text-gray-400">
                  &quot;{searchQuery}&quot; 검색 결과
                </span>
              )}
            </p>
          </div>

          {/* Models Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredModels.map((model, index) => (
              <ModelCard key={model.id} model={model} index={index} />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredModels.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500">
                {searchQuery
                  ? `"${searchQuery}"에 대한 검색 결과가 없습니다.`
                  : "해당 제공업체의 모델이 없습니다."}
              </p>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-xs text-gray-400">
          <p>&copy; 2026 웍스AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
