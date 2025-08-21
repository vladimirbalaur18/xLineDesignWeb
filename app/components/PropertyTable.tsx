"use client";

import { useState, useMemo, useEffect } from "react";
import type { Property } from "@/lib/properties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Edit, Trash2, Search, Plus, Eye, ImageIcon } from "lucide-react";

interface PropertyTableProps {
  properties: Property[];
  onEdit: (property: Property) => void;
  onDelete: (id: string) => void;
  onCreate: () => void;
}

/**
 * Renders a searchable, category-filterable, paginated table of properties with create, edit and delete actions.
 *
 * Displays each property's image (or placeholder), title and slug, category badge, location/address, price, and details
 * (bedrooms, bathrooms, area, year built). Supports case-insensitive search (matches title, location, or address),
 * category filtering, items-per-page selection, and pagination. The current page resets to the first page when filters
 * or items-per-page change.
 *
 * @param properties - Array of property objects to display.
 * @param onEdit - Called with a property when the Edit button is clicked.
 * @param onDelete - Called with a property's slug when the Delete button is clicked.
 * @param onCreate - Called when the Add Property button is clicked.
 * @returns A JSX element containing the complete property table UI.
 */
export function PropertyTable({
  properties,
  onEdit,
  onDelete,
  onCreate,
}: PropertyTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || property.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [properties, searchTerm, categoryFilter]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter]);

  // Calculate pagination data
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageProperties = filteredProperties.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const getCategoryColor = (category: Property["category"]) => {
    switch (category) {
      case "interiorDesign":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "architecture":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "landscapeDesign":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const formatCategory = (category: Property["category"]) => {
    switch (category) {
      case "interiorDesign":
        return "Design Interior";
      case "architecture":
        return "Arhitectură";
      case "landscapeDesign":
        return "Design Peisagistic";
      default:
        return category;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-2xl font-playfair">Proprietăți</CardTitle>
          <Button onClick={onCreate} className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Adaugă Proprietate
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Caută proprietăți..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-input bg-background rounded-md text-sm"
          >
            <option value="all">Toate Categoriile</option>
            <option value="interiorDesign">Design Interior</option>
            <option value="architecture">Arhitectură</option>
            <option value="landscapeDesign">Design Peisagistic</option>
          </select>
        </div>
      </CardHeader>

      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <div className="max-h-[calc(100vh-350px)] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Imagine</TableHead>
                  <TableHead>Titlu</TableHead>
                  <TableHead>Categorie</TableHead>
                  <TableHead>Locație</TableHead>
                  <TableHead>Preț</TableHead>
                  <TableHead>Detalii</TableHead>
                  <TableHead className="text-right">Acțiuni</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProperties.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-8 text-muted-foreground"
                    >
                      Nu au fost găsite proprietăți
                    </TableCell>
                  </TableRow>
                ) : (
                  currentPageProperties.map((property) => (
                    <TableRow key={property.slug}>
                      <TableCell>
                        <div className="w-16 h-12 bg-muted rounded-md overflow-hidden relative group">
                          {property.image ? (
                            <>
                              <img
                                src={property.image || "/placeholder.svg"}
                                alt={property.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <Eye className="h-4 w-4 text-white" />
                              </div>
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ImageIcon className="h-6 w-6 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{property.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {property.slug}
                          </div>
                          {property.sections &&
                            property.sections.length > 0 && (
                              <div className="text-xs text-cyan-400 mt-1">
                                {property.sections.length} secțiun
                                {property.sections.length !== 1 ? "i" : "e"}
                              </div>
                            )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getCategoryColor(property.category)}>
                          {formatCategory(property.category)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          {property.location && (
                            <div className="text-sm">{property.location}</div>
                          )}
                          {property.address && (
                            <div className="text-xs text-muted-foreground">
                              {property.address}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {property.price && (
                          <div className="font-medium">{property.price}</div>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm space-y-1">
                          {property.bedrooms && property.bathrooms && (
                            <div>
                              {property.bedrooms} dorm • {property.bathrooms}{" "}
                              băi
                            </div>
                          )}
                          {property.area && (
                            <div>{property.area.toLocaleString()} mp</div>
                          )}
                          {property.yearBuilt && (
                            <div className="text-muted-foreground">
                              Anul {property.yearBuilt}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onEdit(property)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onDelete(property.slug)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination Controls */}
        {filteredProperties.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Se afișează de la {startIndex + 1} la{" "}
                {Math.min(endIndex, filteredProperties.length)} din{" "}
                {filteredProperties.length} proprietăți
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Elemente per pagină:
                </span>
                <select
                  value={itemsPerPage}
                  onChange={(e) =>
                    handleItemsPerPageChange(Number(e.target.value))
                  }
                  className="px-2 py-1 border border-input bg-background rounded text-sm"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
            </div>

            {totalPages > 1 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        handlePageChange(Math.max(1, currentPage - 1))
                      }
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {/* Page numbers */}
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i;
                    } else {
                      pageNumber = currentPage - 2 + i;
                    }

                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          isActive={currentPage === pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className="cursor-pointer"
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handlePageChange(Math.min(totalPages, currentPage + 1))
                      }
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
