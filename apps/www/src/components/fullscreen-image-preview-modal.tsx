import { memo } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

type FullscreenImagePreviewProps = React.ComponentProps<'img'> & {
    triggerProps?: React.ComponentProps<typeof DialogTrigger>
}
export const FullscreenImagePreview: React.FC<FullscreenImagePreviewProps> = memo(({ triggerProps, className, ...props }) => {
    return (
        <Dialog>
            <DialogTrigger {...triggerProps}>
                <img className={className} {...props} />
            </DialogTrigger>
            <DialogContent className="flex w-fit items-center justify-center p-0 outline-none focus:outline-none focus-visible:outline-none md:w-fit">
                <img
                    src={props.src}
                    alt={props.alt}
                    className="max-h-[90vh] w-fit max-w-[90vw] rounded-[inherit] border object-contain"
                />
            </DialogContent>
        </Dialog>
    )
})
FullscreenImagePreview.displayName = 'FullscreenImagePreview'
