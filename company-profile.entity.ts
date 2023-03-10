import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToOne,
    OneToMany,
    ManyToOne
} from 'typeorm';

import { User } from './user.entity';

import { Country } from 'src/entities/country.entity';
import { City } from 'src/entities/city.entity';
import { CompanyMode } from './company-mode.entity';
import { CompanySupportedCountries } from './company-supported-countries.entity';
import { CompanyImage } from './company-image.entity';


@Entity()
export class CompanyProfile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
        
    // @Column()
    // user_id: number;

    @OneToOne(type => User, user => user.id, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id'})
    user: User;

    @Column({ nullable: true })
    company_name: string;

    @Column({ nullable: true })
    company_email: string;

    // @Column()
    // company_country: string;

    // @Column()
    // company_city: string;
    
    @ManyToOne(type => Country, country => country.id)
    @JoinColumn({ name: 'company_country'})
    country: Country;
    
    @ManyToOne(type => City, city => city.id)
    @JoinColumn({ name: 'company_city'})
    city: City;

    // @Column("simple-array",{nullable: true})
    // mode: string[];

    // @Column("simple-array",{nullable: true})
    // supported_countries: string[];

    @Column({ nullable: true })
    company_address: string;
    
    @Column({ nullable: true})
    company_address2: string;

    @Column({ nullable: true})
    company_picture: string;

    @Column({ nullable: true })
    company_postcode: string;

    @Column({ nullable: true})
    company_website: string;

    @Column({ nullable: true })
    company_phone: string;

    @Column({ nullable: true})
    company_uen: string;

    @Column({ nullable: true })
    company_license_id: string;

    @Column({ nullable: true })
    company_license: string;

    @Column({ nullable: true })
    company_license_expiry: string;

    @Column({ comment: "Used as TRN number" })
    company_tax_id: string;

    @Column({ nullable: true })
    company_tax_doc: string;

    @Column({ nullable: true })
    company_tax_expiry: string;

    @Column({ nullable: true })
    company_code: string;

    @Column({ nullable: true })
    company_sap_code: string;

    @Column({ nullable: true, type: 'enum', enum: ["0", "1", "2"], comment: "0 => not verified, 1 => verified, 2 => Rejected", default: "0" })
    company_verified: "0" | "1" | "2";

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;
    
    @OneToMany(() => CompanyMode, companyMode => companyMode.companyProfile)
    companyModes: CompanyMode[];

    @OneToMany(() => CompanySupportedCountries, companyCountry => companyCountry.companyProfile)
    companySupportedCountries: CompanySupportedCountries[];

    @OneToMany(() => CompanyImage, companyImage => companyImage.companyProfile)
    companyImages: CompanyImage[];
}
