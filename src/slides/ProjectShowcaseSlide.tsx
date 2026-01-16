import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Play, Laptop } from 'lucide-react'
import { useState } from 'react'
import { Slide } from '../components/Slider'
import { assets } from '../assets/images/assets_map'

interface Asset {
  name: string
  image?: string
  url?: string
}

interface MediaModalProps {
  asset: Asset | null
  onClose: () => void
}

function MediaModal({ asset, onClose }: MediaModalProps) {
  if (!asset) return null

  const isVideo = asset.url?.endsWith('.mp4') || asset.image?.endsWith('.mp4')
  const mediaSrc = asset.image || asset.url

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-5xl max-h-[90vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Media content */}
          <div className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl overflow-hidden shadow-2xl">
            {isVideo ? (
              <video
                src={mediaSrc}
                controls
                autoPlay
                className="w-full max-h-[80vh] object-contain"
              />
            ) : (
              <img
                src={mediaSrc}
                alt={asset.name}
                className="w-full max-h-[80vh] object-contain"
              />
            )}

            {/* Title and link */}
            <div className="p-4 flex items-center justify-between bg-white/5">
              <h3 className="font-semibold text-lg">{asset.name}</h3>
              {asset.url && !isVideo && (
                <a
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors text-primary"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

interface ProjectCardProps {
  asset: Asset
  index: number
  onClick: () => void
}

function ProjectCard({ asset, index, onClick }: ProjectCardProps) {
  const isVideo = asset.url?.endsWith('.mp4') || asset.image?.endsWith('.mp4')
  const thumbnailSrc = asset.image || (isVideo ? undefined : asset.url)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.05 }}
      onClick={onClick}
      className="group cursor-pointer bg-white/5 rounded-xl overflow-hidden border border-glass-border 
                 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-black/30 relative overflow-hidden">
        {thumbnailSrc ? (
          <img
            src={thumbnailSrc}
            alt={asset.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {isVideo ? (
              <Play className="w-12 h-12 text-white/30" />
            ) : (
              <Laptop className="w-12 h-12 text-white/30" />
            )}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-4 py-2 bg-black/50 rounded-full text-sm font-medium">
            Click để xem
          </span>
        </div>

        {/* Video indicator */}
        {isVideo && (
          <div className="absolute bottom-2 right-2 p-1.5 bg-black/50 rounded-full">
            <Play className="w-4 h-4 text-white" fill="white" />
          </div>
        )}
      </div>

      {/* Name */}
      <div className="p-3">
        <h4 className="font-medium text-sm truncate">{asset.name}</h4>
      </div>
    </motion.div>
  )
}

export function ProjectShowcaseSlide() {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)

  // Group assets by category
  const aiStudioProjects = assets.filter(a => a.name.toLowerCase().includes('studio'))
  const tauriProjects = assets.filter(a =>
    !a.name.toLowerCase().includes('studio') &&
    !a.name.toLowerCase().includes('youtu')
  )
  const appProjects = assets.filter(a => a.name.toLowerCase().includes('youtu'))

  return (
    <>
      <Slide
        icon={Laptop}
        subtitle="Project Gallery"
        title="Các Dự Án Thực Tế"
        description="Click vào hình để xem chi tiết"
        align="left"
      >
        {/* AI Studio Projects */}
        {aiStudioProjects.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Google AI Studio</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {aiStudioProjects.map((asset, i) => (
                <ProjectCard
                  key={asset.name}
                  asset={asset}
                  index={i}
                  onClick={() => setSelectedAsset(asset)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tauri Tools */}
        {tauriProjects.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Tools với Tauri</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {tauriProjects.map((asset, i) => (
                <ProjectCard
                  key={asset.name}
                  asset={asset}
                  index={i + aiStudioProjects.length}
                  onClick={() => setSelectedAsset(asset)}
                />
              ))}
            </div>
          </div>
        )}

        {/* App Demos */}
        {appProjects.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">App Demos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {appProjects.map((asset, i) => (
                <ProjectCard
                  key={asset.name}
                  asset={asset}
                  index={i + aiStudioProjects.length + tauriProjects.length}
                  onClick={() => setSelectedAsset(asset)}
                />
              ))}
            </div>
          </div>
        )}
      </Slide>

      {/* Modal */}
      {selectedAsset && (
        <MediaModal
          asset={selectedAsset}
          onClose={() => setSelectedAsset(null)}
        />
      )}
    </>
  )
}
