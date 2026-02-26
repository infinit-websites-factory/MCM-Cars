import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { fetchCars, transformApiCarToVehicle } from "@/services/carsApi";

const VehicleSearch = () => {
  const navigate = useNavigate();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { data: carsResponse } = useQuery({
    queryKey: ["cars"],
    queryFn: () => fetchCars(),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  const vehicles = useMemo(
    () => (carsResponse ? carsResponse.items.map(transformApiCarToVehicle) : []),
    [carsResponse]
  );

  const totalCount = carsResponse?.total || 0;

  // Extract unique brands
  const brands = useMemo(
    () =>
      [...new Set(vehicles.map((v) => v.brand).filter((b) => b && b.toLowerCase() !== "unknown"))].sort(),
    [vehicles]
  );

  // Extract models for selected brand
  const models = useMemo(
    () =>
      brand
        ? [...new Set(vehicles.filter((v) => v.brand === brand).map((v) => v.model).filter(Boolean))].sort()
        : [],
    [vehicles, brand]
  );

  // Extract unique body types
  const bodyTypes = useMemo(
    () =>
      [...new Set(vehicles.map((v) => v.type).filter((t) => t && t.toLowerCase() !== "unknown"))].sort(),
    [vehicles]
  );

  // Price ranges
  const priceRanges = [
    { label: "Hasta 15.000€", value: "15000" },
    { label: "Hasta 25.000€", value: "25000" },
    { label: "Hasta 40.000€", value: "40000" },
    { label: "Hasta 60.000€", value: "60000" },
    { label: "Hasta 80.000€", value: "80000" },
    { label: "Hasta 100.000€", value: "100000" },
    { label: "Sin límite", value: "" },
  ];

  // Count matching vehicles
  const matchingCount = useMemo(() => {
    return vehicles.filter((v) => {
      if (brand && v.brand !== brand) return false;
      if (model && v.model !== model) return false;
      if (bodyType && v.type !== bodyType) return false;
      if (maxPrice && v.price > parseInt(maxPrice)) return false;
      return true;
    }).length;
  }, [vehicles, brand, model, bodyType, maxPrice]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (brand) params.set("brand", brand);
    if (model) params.set("model", model);
    if (bodyType) params.set("bodyType", bodyType);
    if (maxPrice) params.set("maxPrice", maxPrice);
    navigate(`/stock?${params.toString()}`);
  };

  return (
    <section className="py-14 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Buscador de vehículos
          </h2>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-green-600 font-bold">✓</span>
            <span className="text-lg">Nuestros vehículos</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-md p-2 flex flex-col md:flex-row items-stretch gap-2">
          {/* Brand */}
          <div className="relative flex-1 min-w-0">
            <select
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
                setModel("");
              }}
              className="w-full h-12 px-4 pr-10 rounded-lg bg-gray-50 border-0 text-sm font-medium text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/10"
            >
              <option value="">Marca</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>

          {/* Model */}
          <div className="relative flex-1 min-w-0">
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              disabled={!brand}
              className="w-full h-12 px-4 pr-10 rounded-lg bg-gray-50 border-0 text-sm font-medium text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Modelo</option>
              {models.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>

          {/* Body Type */}
          <div className="relative flex-1 min-w-0">
            <select
              value={bodyType}
              onChange={(e) => setBodyType(e.target.value)}
              className="w-full h-12 px-4 pr-10 rounded-lg bg-gray-50 border-0 text-sm font-medium text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/10"
            >
              <option value="">Carrocería</option>
              {bodyTypes.map((bt) => (
                <option key={bt} value={bt}>{bt}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>

          {/* Price */}
          <div className="relative flex-1 min-w-0">
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full h-12 px-4 pr-10 rounded-lg bg-gray-50 border-0 text-sm font-medium text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/10"
            >
              <option value="">Precio Hasta</option>
              {priceRanges.map((pr) => (
                <option key={pr.value} value={pr.value}>{pr.label}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="h-12 px-6 bg-[#111] text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-black transition-colors whitespace-nowrap shrink-0"
          >
            <Search size={16} />
            {matchingCount > 0 ? `${matchingCount} vehículos` : `${totalCount} vehículos`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VehicleSearch;
