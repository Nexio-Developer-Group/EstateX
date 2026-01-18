import { useState, useEffect } from 'react';
import { ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const units = [
    { value: 'sqft', label: 'Square Feet (sq.ft)', toSqFt: 1 },
    { value: 'sqm', label: 'Square Meter (sq.m)', toSqFt: 10.764 },
    { value: 'sqyd', label: 'Square Yard (sq.yd)', toSqFt: 9 },
    { value: 'acre', label: 'Acre', toSqFt: 43560 },
    { value: 'hectare', label: 'Hectare', toSqFt: 107639 },
    { value: 'bigha', label: 'Bigha (Pucca)', toSqFt: 27225 },
    { value: 'biswa', label: 'Biswa', toSqFt: 1361.25 },
    { value: 'kanal', label: 'Kanal', toSqFt: 5445 },
    { value: 'marla', label: 'Marla', toSqFt: 272.25 },
    { value: 'guntha', label: 'Guntha', toSqFt: 1089 },
    { value: 'ground', label: 'Ground', toSqFt: 2400 },
    { value: 'cent', label: 'Cent', toSqFt: 435.6 },
    { value: 'ankanam', label: 'Ankanam', toSqFt: 72 },
];

const commonConversions = [
    {
        category: 'Standard Units',
        items: [
            { from: '1 Acre', to: '43,560 Sq.ft' },
            { from: '1 Hectare', to: '2.47 Acres' },
            { from: '1 Sq. Meter', to: '10.76 Sq.ft' },
            { from: '1 Sq. Yard', to: '9 Sq.ft' },
        ]
    },
    {
        category: 'North India',
        items: [
            { from: '1 Bigha (Pucca)', to: '3025 Sq.yd' },
            { from: '1 Biswa', to: '151.25 Sq.yd' },
            { from: '1 Kanal', to: '5445 Sq.ft' },
            { from: '1 Marla', to: '272.25 Sq.ft' },
        ]
    },
    {
        category: 'South & West India',
        items: [
            { from: '1 Guntha', to: '1089 Sq.ft' },
            { from: '1 Ground', to: '2400 Sq.ft' },
            { from: '1 Cent', to: '435.6 Sq.ft' },
            { from: '1 Ankanam', to: '72 Sq.ft' },
        ]
    }
];

const AreaConverter = () => {
    const [fromValue, setFromValue] = useState('1');
    const [toValue, setToValue] = useState('43560');
    const [fromUnit, setFromUnit] = useState('acre');
    const [toUnit, setToUnit] = useState('sqft');

    useEffect(() => {
        convert();
    }, [fromValue, fromUnit, toUnit]);

    const convert = () => {
        const inputValue = parseFloat(fromValue) || 0;
        const fromUnitData = units.find(u => u.value === fromUnit);
        const toUnitData = units.find(u => u.value === toUnit);

        if (!fromUnitData || !toUnitData) return;

        const sqFt = inputValue * fromUnitData.toSqFt;
        const result = sqFt / toUnitData.toSqFt;

        setToValue(result.toLocaleString('en-IN', { maximumFractionDigits: 2 }));
    };

    const swapUnits = () => {
        const tempUnit = fromUnit;
        const tempValue = fromValue;
        setFromUnit(toUnit);
        setToUnit(tempUnit);
        setToValue(tempValue);
        setFromValue(toValue.replace(/,/g, ''));
    };

    const getUnitLabel = (value: string) => {
        const unit = units.find(u => u.value === value);
        return unit?.label.split('(')[0].trim() || '';
    };

    return (
        <div className="min-h-screen flex flex-col">

            {/* Hero */}
            <section className="bg-primary py-16 px-4 md:px-6 lg:px-8">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">Land Area Converter</h1>
                    <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto text-lg">
                        Easily convert between standard and local land measurement units used across India. Accurate, fast, and simple.
                    </p>
                </div>
            </section>

            <main className="flex-1 py-16 px-4 md:px-6 lg:px-8 bg-background">
                <div className="container-custom max-w-4xl mx-auto">
                    {/* Converter */}
                    <Card className="border-border">
                        <CardContent className="p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                                {/* From */}
                                <div>
                                    <label className="text-sm font-medium mb-2 block text-muted-foreground">From</label>
                                    <Input
                                        type="number"
                                        value={fromValue}
                                        onChange={(e) => setFromValue(e.target.value)}
                                        className="text-lg h-12 mb-3"
                                    />
                                    <Select value={fromUnit} onValueChange={setFromUnit}>
                                        <SelectTrigger className="h-10">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {units.map((unit) => (
                                                <SelectItem key={unit.value} value={unit.value}>
                                                    {unit.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Swap Button */}
                                <div className="flex justify-center md:mb-6">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary/10"
                                        onClick={swapUnits}
                                    >
                                        <ArrowRightLeft className="w-5 h-5 text-primary" />
                                    </Button>
                                </div>

                                {/* To */}
                                <div>
                                    <label className="text-sm font-medium mb-2 block text-muted-foreground">To</label>
                                    <Input
                                        type="text"
                                        value={toValue}
                                        readOnly
                                        className="text-lg h-12 mb-3 bg-muted"
                                    />
                                    <Select value={toUnit} onValueChange={setToUnit}>
                                        <SelectTrigger className="h-10">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {units.map((unit) => (
                                                <SelectItem key={unit.value} value={unit.value}>
                                                    {unit.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Result */}
                            <div className="mt-8 p-8 bg-primary/5 border border-primary/10 rounded-lg text-center">
                                <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Result</p>
                                <p className="text-2xl md:text-3xl font-bold text-primary">
                                    {fromValue} {getUnitLabel(fromUnit)} = {toValue} {getUnitLabel(toUnit)}
                                </p>
                            </div>

                            <Button className="mt-8 w-full md:w-auto px-8" onClick={convert}>
                                Convert Now
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Common Conversions */}
                    <section className="mt-16">
                        <h2 className="text-2xl font-bold mb-8">Common Conversions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {commonConversions.map((group) => (
                                <Card key={group.category} className="border-border">
                                    <CardContent className="p-6">
                                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
                                            {group.category}
                                        </h3>
                                        <div className="space-y-4">
                                            {group.items.map((item, index) => (
                                                <div key={index} className="flex items-center justify-between text-sm border-b border-border/50 pb-3 last:border-0 last:pb-0">
                                                    <span className="text-foreground font-medium">{item.from}</span>
                                                    <span className="text-primary font-bold">{item.to}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

        </div>
    );
};

export default AreaConverter;
