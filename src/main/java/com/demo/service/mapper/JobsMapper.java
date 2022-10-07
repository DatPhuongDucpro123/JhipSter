package com.demo.service.mapper;

import com.demo.domain.Category;
import com.demo.domain.Jobs;
import com.demo.service.dto.CategoryDTO;
import com.demo.service.dto.JobsDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Jobs} and its DTO {@link JobsDTO}.
 */
@Mapper(componentModel = "spring")
public interface JobsMapper extends EntityMapper<JobsDTO, Jobs> {
    @Mapping(target = "category", source = "category", qualifiedByName = "categoryId")
    JobsDTO toDto(Jobs s);

    @Named("categoryId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CategoryDTO toDtoCategoryId(Category category);
}
