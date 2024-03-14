import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number | undefined
  totalCount: number | undefined
  perPage: number | undefined
  onPageChange: (pageIndex: number) => void | Promise<void>
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount! / perPage!) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex! + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => onPageChange(0)}
            variant={'outline'}
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft size={16} />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button
            onClick={() => onPageChange(pageIndex! - 1)}
            variant={'outline'}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft size={16} />

            <span className="sr-only">Página anterior</span>
          </Button>
          <Button
            onClick={() => onPageChange(pageIndex! + 1)}
            variant={'outline'}
            className="h-8 w-8 p-0"
          >
            <ChevronRight size={16} />
            <span className="sr-only">Próxima página</span>
          </Button>

          <Button
            onClick={() => onPageChange(pages - 1)}
            variant={'outline'}
            className="h-8 w-8 p-0"
          >
            <ChevronsRight size={16} />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
